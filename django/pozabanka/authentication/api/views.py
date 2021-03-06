from django.contrib.auth import login, logout
from rest_framework import views, response, permissions, generics
from rest_framework.authentication import SessionAuthentication
from .serializers import LoginSerializer, RegisterSerializer
from django.contrib.auth.models import User


class LoginView(views.APIView):
    permission_classes = (permissions.AllowAny,)
    authentication_classes = (SessionAuthentication,)

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        login(request, user)
        return response.Response(
            {"success": "You are logged in", "user": user.username}
        )


class LogoutView(views.APIView):
    authentication_classes = (SessionAuthentication,)

    def post(self, request):
        logout(request)
        return response.Response({"success": "You have been logged out."})


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (permissions.AllowAny,)
    serializer_class = RegisterSerializer
