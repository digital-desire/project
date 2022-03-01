from django.shortcuts import get_object_or_404
from pozabanka.api.serializers import ArticleSerializer, SourceSerializer
from pozabanka.articles.models import Article, Source
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response


class ArticleViewSet(viewsets.ViewSet):

    # TODO: permissions, methods for update

    def list(self, request):
        queryset = Article.objects.all()
        serializer = ArticleSerializer(queryset, many=True, context=request)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        article = get_object_or_404(Article, pk=pk)
        serializer = ArticleSerializer(article, context=request)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = ArticleSerializer(data=request.data, context=request)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def destroy(self, request, pk=None):
        article = get_object_or_404(Article, pk=pk)
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    @action(detail=True, methods=["post"])
    def add_source(self, request, pk=None):
        user = request.user
        article = get_object_or_404(Article, pk=pk)
        serializer = SourceSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        Source.objects.create(author=user, article=article, **serializer.validated_data)
        return Response(
            ArticleSerializer(article, context=request).data,
            status=status.HTTP_201_CREATED,
        )
