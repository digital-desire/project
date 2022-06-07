from django.urls import reverse
from pozabanka.articles.models import Article, Source
from pozabanka.tags.models import Tag
from rest_framework import serializers


class SourceSerializer(serializers.ModelSerializer):
    author = serializers.SerializerMethodField()
    source_link = serializers.SerializerMethodField()
    article_link = serializers.SerializerMethodField()

    class Meta:
        model = Source
        fields = [
            "id",
            "title",
            "url",
            "author",
            "created_at",
            "updated_at",
            "source_link",
            "article_link",
        ]

    def get_author(self, instance):
        return instance.author.email

    def get_source_link(self, instance):
        source_path = reverse("source-detail", args=[instance.id])
        request = self.context
        return request.build_absolute_uri(source_path)

    def get_article_link(self, instance):
        article_path = reverse("article-detail", args=[instance.article.id])
        request = self.context
        return request.build_absolute_uri(article_path)


class TagSerializer(serializers.ModelSerializer):
    tag_type = serializers.SerializerMethodField()

    class Meta:
        model = Tag
        fields = ["name", "tag_type"]

    def get_tag_type(self, instance):
        if instance.tag_type:
            return instance.tag_type.name
        return "undefined"


class ArticleSerializer(serializers.ModelSerializer):
    sources = SourceSerializer(many=True, required=False)
    author = serializers.SerializerMethodField()
    article_link = serializers.SerializerMethodField()
    likes = serializers.SerializerMethodField()
    dislikes = serializers.SerializerMethodField()
    source_count = serializers.SerializerMethodField()
    tags = TagSerializer(read_only=True, many=True)

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
            "tags",
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
