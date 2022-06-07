from django.shortcuts import get_object_or_404
from rest_framework import status, viewsets
from rest_framework.response import Response

from pozabanka.api.serializers import ArticleSerializer, SourceSerializer
from pozabanka.articles.models import Article, Source
from pozabanka.api.pagination import ArticlesPagination


class ArticleViewSet(viewsets.ViewSet):

    # TODO: permissions??

    def list(self, request):
        queryset = Article.objects.all()
        pagination = ArticlesPagination()
        paginated_qs = pagination.paginate_queryset(queryset, request)
        serializer = ArticleSerializer(paginated_qs, many=True, context=request)
        return pagination.get_paginated_response(serializer.data)

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

    def update(self, request, pk=None, *args, **kwargs):
        partial = kwargs.pop("partial", False)
        article = get_object_or_404(Article, pk=pk)
        serializer = ArticleSerializer(
            article, data=request.data, context=request, partial=partial
        )
        serializer.is_valid(raise_exception=True)
        serializer.update(article, serializer.validated_data)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def partial_update(self, request, pk=None, *args, **kwargs):
        kwargs["partial"] = True
        return self.update(request, pk=pk, *args, **kwargs)


class SourceViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = Source.objects.all()
        pagination = ArticlesPagination()
        paginated_qs = pagination.paginate_queryset(queryset, request)
        serializer = SourceSerializer(paginated_qs, many=True, context=request)
        return pagination.get_paginated_response(serializer.data)

    def retrieve(self, request, pk=None):
        source = get_object_or_404(Source, pk=pk)
        serializer = SourceSerializer(source, context=request)
        return Response(serializer.data)

    def create(self, request, *args, **kwargs):
        serializer = SourceSerializer(data=request.data, context=request)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def destroy(self, request, pk=None):
        source = get_object_or_404(Source, pk=pk)
        source.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def update(self, request, pk=None, *args, **kwargs):
        partial = kwargs.pop("partial", False)
        source = get_object_or_404(Source, pk=pk)
        serializer = SourceSerializer(
            source, data=request.data, context=request, partial=partial
        )
        serializer.is_valid(raise_exception=True)
        serializer.update(source, serializer.validated_data)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def partial_update(self, request, pk=None, *args, **kwargs):
        kwargs["partial"] = True
        return self.update(request, pk=pk, *args, **kwargs)
