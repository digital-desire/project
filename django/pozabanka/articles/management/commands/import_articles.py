import json
from datetime import datetime
from django.core.management.base import BaseCommand
from newscatcher import Newscatcher, urls
import re
import json

from pozabanka.articles.models import Article, Source
from pozabanka.users.models import User


class Command(BaseCommand):
    def handle(self, *args, **options):
        words_to_pass = ["i", "na", "w", "z", "", "a", "się", "to", "nie"]

        websites = urls(language="PL")

        first_page = Newscatcher(website=websites[0])
        first_page_results = first_page.get_news()

        articles = []

        for article in first_page_results["articles"]:
            try:
                articles.append(
                    {
                        "title": article["title"],
                        "summary": article["summary"],
                        "published": article["published_parsed"],
                        "sources": [
                            {"link": article["link"], "title": article["title"]}
                        ],
                    }
                )
            except KeyError:
                pass

        for url in websites[1:]:

            ns = Newscatcher(website=url)

            results = ns.get_news()

            if results:
                for new_article in results["articles"][0:20]:
                    new_article_title = re.sub(
                        "[^A-Za-z0-9ąśćżźńóęłĘÓĄŚŁŻŹĆŃ]+",
                        " ",
                        new_article["title"],
                        re.UNICODE,
                    )
                    new_article_word_list = new_article_title.split(" ")

                    for article in articles:
                        article_title = re.sub(
                            "[^A-Za-z0-9ąśćżźńóęłĘÓĄŚŁŻŹĆŃ]+",
                            " ",
                            article["title"],
                            re.UNICODE,
                        )
                        article_word_list = article_title.split(" ")

                        word_count = 0
                        for word in new_article_word_list:
                            if word in article_word_list and word not in words_to_pass:
                                word_count += 1

                        if word_count >= 3:
                            if not any(
                                added["title"] == new_article["title"]
                                for added in article["sources"]
                            ):
                                article["sources"].append(
                                    {
                                        "link": new_article["link"],
                                        "title": new_article["title"],
                                    }
                                )

                        elif not any(
                            added["title"] == new_article["title"] for added in articles
                        ):
                            try:
                                articles.append(
                                    {
                                        "title": new_article["title"],
                                        "summary": new_article["summary"],
                                        "published": new_article["published_parsed"],
                                        "sources": [
                                            {
                                                "link": new_article["link"],
                                                "title": new_article["title"],
                                            }
                                        ],
                                    }
                                )
                            except KeyError:
                                pass

        article_count = 0
        try:
            user = User.objects.get(email="diklofenak@abc.pl")
        except User.DoesNotExist:
            user = User.objects.create_user(
                email="diklofenak@abc.pl", password="hejyo123123"
            )

        for object in articles:
            try:
                date = datetime(
                    object["published"][0],
                    object["published"][1],
                    object["published"][2],
                )
            except TypeError:
                date = datetime.today()
            article = Article.objects.create(
                title=object["title"],
                description=object["summary"],
                author=user,
                event_date=date,
            )
            article_count += 1

            for source in object["sources"]:
                Source.objects.create(
                    title=source["title"],
                    url=source["link"],
                    article=article,
                    author=user,
                )

        print("Articles added: ", article_count)
