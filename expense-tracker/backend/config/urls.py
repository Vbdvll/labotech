from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from expenses.views import ExpenseViewSet
from reports.views import ReportViewSet
from users.views import RegisterView, UserProfileView

router = DefaultRouter()
router.register("expenses", ExpenseViewSet, basename="expenses")
router.register("reports", ReportViewSet, basename="reports")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/auth/register/", RegisterView.as_view(), name="register"),
    path("api/auth/login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/auth/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/auth/me/", UserProfileView.as_view(), name="user_profile"),
    path("api/", include(router.urls)),
]
