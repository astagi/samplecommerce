from django.db import models
from django.template.defaultfilters import slugify


class Product(models.Model):
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, blank=True, unique=True)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    description = models.TextField(blank=True, default='')
    brief_description = models.TextField(blank=True, default='')

    def __str__(self):
        return self.name

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Product, self).save(*args, **kwargs)
