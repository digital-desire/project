"""
https://docs.djangoproject.com/en/3.2/topics/http/urls/
"""
from django.contrib import admin
from django.urls import include, path

from .views import index

urlpatterns = [
    path("", index, name="index-page"),
    path("admin/", admin.site.urls),
    path("accounts/", include("pozabanka.users.urls")),
    path("api/", include("pozabanka.api.routers")),
]
