from django.urls import reverse
from pozabanka.articles.models import Article, Source
from rest_framework import serializers


class SourceSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()

    class Meta:
        model = Source
        fields = [
            "title",
            "url",
            "author",
            "created_at",
            "updated_at",
        ]

    def get_author(self, instance):
        return instance.author.email


class ArticleSerializer(serializers.ModelSerializer):
    sources = SourceSerializer(many=True, required=False)
    author = serializers.SerializerMethodField()
    article_link = serializers.SerializerMethodField()
    likes = serializers.SerializerMethodField()
    dislikes = serializers.SerializerMethodField()
    source_count = serializers.SerializerMethodField()

    class Meta:
        model = Article
        fields = [
            "id",
            "slug",
            "title",
            "description",
            "author",
            "event_date",
            "created_at",
            "updated_at",
            "article_link",
            "likes",
            "dislikes",
            "source_count",
            "sources",
        ]

    def get_author(self, instance):
        return instance.author.email

    def get_article_link(self, instance):
        article_path = reverse("article-detail", args=[instance.id])
        request = self.context
        return request.build_absolute_uri(article_path)

    def get_likes(self, instance):
        return instance.likes.all().count()

    def get_dislikes(self, instance):
        return instance.dislikes.all().count()

    def get_source_count(self, instance):
        return instance.sources.all().count()

    def create(self, validated_data):
        user = self.context.user

        try:
            sources_data = validated_data.pop("sources")
        except KeyError:
            sources_data = []

        article = Article.objects.create(**validated_data, author=user)
        if sources_data:
            for source_data in sources_data:
                Source.objects.create(article=article, author=user, **source_data)

        return article
