# Generated for the Expense Tracker starter project.
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):
    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name="Expense",
            fields=[
                ("id", models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name="ID")),
                ("amount", models.DecimalField(decimal_places=2, max_digits=12)),
                ("category", models.CharField(choices=[("food", "Nourriture"), ("transport", "Transport"), ("bills", "Factures"), ("shopping", "Shopping"), ("health", "Sante"), ("leisure", "Loisirs"), ("subscriptions", "Abonnements"), ("other", "Autres")], default="other", max_length=32)),
                ("description", models.CharField(max_length=220)),
                ("date", models.DateField()),
                ("payment_method", models.CharField(choices=[("card", "Carte"), ("cash", "Especes"), ("transfer", "Virement"), ("mobile", "Mobile"), ("other", "Autre")], default="card", max_length=32)),
                ("created_at", models.DateTimeField(auto_now_add=True)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("user", models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name="expenses", to=settings.AUTH_USER_MODEL)),
            ],
            options={
                "ordering": ["-date", "-created_at"],
                "indexes": [models.Index(fields=["user", "date"], name="expenses_ex_user_id_1d1b4c_idx"), models.Index(fields=["user", "category"], name="expenses_ex_user_id_63d3e7_idx")],
            },
        ),
    ]
