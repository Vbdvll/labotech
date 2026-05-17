from rest_framework import permissions, response, views


class HealthCheckView(views.APIView):
    permission_classes = [permissions.AllowAny]

    def get(self, request):
        return response.Response({"status": "ok"})
