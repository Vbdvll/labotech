from datetime import timedelta
from decimal import Decimal

from django.db.models import Sum
from django.db.models.functions import TruncDay, TruncMonth
from django.utils import timezone
from rest_framework import decorators, response, viewsets

from .models import Expense
from .serializers import ExpenseSerializer


def money(value):
    return float(value or Decimal("0"))


def iso_date(value):
    if hasattr(value, "date"):
        value = value.date()
    return value.isoformat()


class ExpenseViewSet(viewsets.ModelViewSet):
    serializer_class = ExpenseSerializer
    search_fields = ["description"]
    ordering_fields = ["date", "amount", "created_at"]
    ordering = ["-date", "-created_at"]

    def get_queryset(self):
        queryset = Expense.objects.filter(user=self.request.user)
        category = self.request.query_params.get("category")
        start_date = self.request.query_params.get("start_date")
        end_date = self.request.query_params.get("end_date")

        if category:
            queryset = queryset.filter(category=category)
        if start_date:
            queryset = queryset.filter(date__gte=start_date)
        if end_date:
            queryset = queryset.filter(date__lte=end_date)
        return queryset

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    @decorators.action(detail=False, methods=["get"])
    def meta(self, request):
        return response.Response(
            {
                "categories": [{"value": value, "label": label} for value, label in Expense.Category.choices],
                "payment_methods": [{"value": value, "label": label} for value, label in Expense.PaymentMethod.choices],
            }
        )

    @decorators.action(detail=False, methods=["get"])
    def stats(self, request):
        today = timezone.localdate()
        week_start = today - timedelta(days=today.weekday())
        month_start = today.replace(day=1)
        queryset = self.get_queryset()

        by_category = list(
            queryset.values("category")
            .annotate(total=Sum("amount"))
            .order_by("-total")
        )
        by_day = list(
            queryset.filter(date__gte=today - timedelta(days=30))
            .annotate(period=TruncDay("date"))
            .values("period")
            .annotate(total=Sum("amount"))
            .order_by("period")
        )
        by_month = list(
            queryset.annotate(period=TruncMonth("date"))
            .values("period")
            .annotate(total=Sum("amount"))
            .order_by("period")
        )
        weekly = list(
            queryset.filter(date__gte=week_start)
            .annotate(period=TruncDay("date"))
            .values("period")
            .annotate(total=Sum("amount"))
            .order_by("period")
        )

        latest = queryset.first()
        dominant = by_category[0]["category"] if by_category else None

        return response.Response(
            {
                "today": money(queryset.filter(date=today).aggregate(total=Sum("amount"))["total"]),
                "week": money(queryset.filter(date__gte=week_start, date__lte=today).aggregate(total=Sum("amount"))["total"]),
                "month": money(queryset.filter(date__gte=month_start, date__lte=today).aggregate(total=Sum("amount"))["total"]),
                "total": money(queryset.aggregate(total=Sum("amount"))["total"]),
                "dominant_category": dominant,
                "latest_expense": ExpenseSerializer(latest).data if latest else None,
                "by_category": [{"category": item["category"], "total": money(item["total"])} for item in by_category],
                "by_day": [{"date": iso_date(item["period"]), "total": money(item["total"])} for item in by_day],
                "by_month": [{"month": iso_date(item["period"]), "total": money(item["total"])} for item in by_month],
                "weekly": [{"date": iso_date(item["period"]), "total": money(item["total"])} for item in weekly],
            }
        )
