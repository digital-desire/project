from pozabanka.api.viewsets import ArticleViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r"articles", ArticleViewSet, basename="article")

urlpatterns = router.urls
