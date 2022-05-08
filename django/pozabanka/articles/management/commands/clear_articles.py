from django.core.management.base import BaseCommand

from pozabanka.articles.models import Article, Source


class Command(BaseCommand):
    def handle(self, *args, **options):
        Article.objects.all().delete()
        Source.objects.all().delete()
