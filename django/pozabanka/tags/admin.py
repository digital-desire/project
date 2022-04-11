from django.contrib import admin
from pozabanka.tags.models import Tag, TagType


admin.site.register([Tag, TagType])
