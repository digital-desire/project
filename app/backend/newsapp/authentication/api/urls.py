from django.urls import path
from . import views


urlpatterns = [
    path("login/", views.LoginView.as_view(), name="user-login"),
    path("logout/", views.LogoutView.as_view(), name="user-logout"),
    path("register/", views.RegisterView.as_view(), name="user-register"),
]
