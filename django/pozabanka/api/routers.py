from pozabanka.api.viewsets import ArticleViewSet, SourceViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r"articles", ArticleViewSet, basename="article")
router.register(r"sources", SourceViewSet, basename="source")

urlpatterns = router.urls
