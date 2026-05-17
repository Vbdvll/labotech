from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from api.views import HealthCheckView
from expenses.views import ExpenseViewSet
from reports.views import ReportViewSet
from users.views import AdminUserListView, ForgotPasswordView, RegisterView, ResetPasswordView, UserProfileView

router = DefaultRouter()
router.register("expenses", ExpenseViewSet, basename="expenses")
router.register("reports", ReportViewSet, basename="reports")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/health/", HealthCheckView.as_view(), name="health_check"),
    path("api/auth/register/", RegisterView.as_view(), name="register"),
    path("api/auth/login/", TokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("api/auth/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("api/auth/me/", UserProfileView.as_view(), name="user_profile"),
    path("api/auth/forgot-password/", ForgotPasswordView.as_view(), name="forgot_password"),
    path("api/auth/reset-password/", ResetPasswordView.as_view(), name="reset_password"),
    path("api/admin/users/", AdminUserListView.as_view(), name="admin_users"),
    path("api/", include(router.urls)),
]
