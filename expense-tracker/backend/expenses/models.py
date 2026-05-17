from django.conf import settings
from django.db import models


class Expense(models.Model):
    class Category(models.TextChoices):
        FOOD = "food", "Nourriture"
        TRANSPORT = "transport", "Transport"
        BILLS = "bills", "Factures"
        SHOPPING = "shopping", "Shopping"
        HEALTH = "health", "Sante"
        LEISURE = "leisure", "Loisirs"
        SUBSCRIPTIONS = "subscriptions", "Abonnements"
        OTHER = "other", "Autres"

    class PaymentMethod(models.TextChoices):
        CARD = "card", "Carte"
        CASH = "cash", "Especes"
        TRANSFER = "transfer", "Virement"
        MOBILE = "mobile", "Mobile"
        OTHER = "other", "Autre"

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name="expenses")
    amount = models.DecimalField(max_digits=12, decimal_places=2)
    category = models.CharField(max_length=32, choices=Category.choices, default=Category.OTHER)
    description = models.CharField(max_length=220, blank=True, default="")
    date = models.DateField()
    payment_method = models.CharField(max_length=32, choices=PaymentMethod.choices, default=PaymentMethod.CARD)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-date", "-created_at"]
        indexes = [
            models.Index(fields=["user", "date"]),
            models.Index(fields=["user", "category"]),
        ]

    def __str__(self):
        return f"{self.description or self.get_category_display()} - {self.amount}"
