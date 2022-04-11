import uuid
from django.db import models


class TagType(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )
    name = models.CharField(max_length=100, blank=False)

    def __str__(self):
        return self.name


class Tag(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True
    )
    tag_type = models.ForeignKey(
        TagType, on_delete=models.SET_NULL, blank=True, null=True
    )
    name = models.CharField(max_length=100, blank=False)

    def __str__(self):
        if self.tag_type:
            tag_type = self.tag_type.name
        else:
            tag_type = "undefined"
        return f"{self.name} ({tag_type})"
