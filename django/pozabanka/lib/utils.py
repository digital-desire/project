import uuid
from django.template.defaultfilters import slugify


def get_unique_slug_with_uuid(string_to_slug):
    return f'{slugify(string_to_slug)}-{str(uuid.uuid4())[:8]}'