from datetime import timedelta
from io import BytesIO

from django.db.models import Sum
from django.http import FileResponse
from django.utils import timezone
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle
from rest_framework import decorators, response, viewsets

from expenses.models import Expense


class ReportViewSet(viewsets.ViewSet):
    def _range(self, period):
        today = timezone.localdate()
        if period == "daily":
            return today, today, "journalier"
        if period == "weekly":
            start = today - timedelta(days=today.weekday())
            return start, today, "hebdomadaire"
        start = today.replace(day=1)
        return start, today, "mensuel"

    def list(self, request):
        period = request.query_params.get("period", "monthly")
        start, end, label = self._range(period)
        queryset = Expense.objects.filter(user=request.user, date__gte=start, date__lte=end)
        total = queryset.aggregate(total=Sum("amount"))["total"] or 0
        by_category = queryset.values("category").annotate(total=Sum("amount")).order_by("-total")
        return response.Response(
            {
                "period": period,
                "label": label,
                "start_date": start,
                "end_date": end,
                "total": float(total),
                "count": queryset.count(),
                "by_category": [{"category": item["category"], "total": float(item["total"])} for item in by_category],
            }
        )

    @decorators.action(detail=False, methods=["get"])
    def pdf(self, request):
        period = request.query_params.get("period", "monthly")
        start, end, label = self._range(period)
        expenses = Expense.objects.filter(user=request.user, date__gte=start, date__lte=end)

        buffer = BytesIO()
        doc = SimpleDocTemplate(buffer, pagesize=A4, title=f"Rapport {label}")
        styles = getSampleStyleSheet()
        rows = [["Date", "Categorie", "Description", "Paiement", "Montant"]]
        total = 0
        for expense in expenses:
            total += expense.amount
            rows.append(
                [
                    expense.date.isoformat(),
                    expense.get_category_display(),
                    expense.description,
                    expense.get_payment_method_display(),
                    f"{expense.amount} EUR",
                ]
            )
        rows.append(["", "", "", "Total", f"{total} EUR"])

        table = Table(rows, repeatRows=1)
        table.setStyle(
            TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#0f172a")),
                    ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                    ("GRID", (0, 0), (-1, -1), 0.25, colors.HexColor("#cbd5e1")),
                    ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                    ("FONTNAME", (3, -1), (-1, -1), "Helvetica-Bold"),
                    ("ALIGN", (4, 1), (4, -1), "RIGHT"),
                    ("ROWBACKGROUNDS", (0, 1), (-1, -2), [colors.white, colors.HexColor("#f8fafc")]),
                ]
            )
        )
        doc.build(
            [
                Paragraph(f"Rapport {label} Expense Tracker", styles["Title"]),
                Paragraph(f"Periode : {start.isoformat()} au {end.isoformat()}", styles["Normal"]),
                Spacer(1, 18),
                table,
            ]
        )
        buffer.seek(0)
        return FileResponse(buffer, as_attachment=True, filename=f"expense-report-{period}.pdf")
