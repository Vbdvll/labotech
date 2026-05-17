from rest_framework import serializers

from .models import Expense


class ExpenseSerializer(serializers.ModelSerializer):
    category_label = serializers.CharField(source="get_category_display", read_only=True)
    payment_method_label = serializers.CharField(source="get_payment_method_display", read_only=True)

    class Meta:
        model = Expense
        fields = (
            "id",
            "amount",
            "category",
            "category_label",
            "description",
            "date",
            "payment_method",
            "payment_method_label",
            "created_at",
            "updated_at",
        )

    def validate_amount(self, value):
        if value <= 0:
            raise serializers.ValidationError("Le montant doit etre superieur a zero.")
        return value
