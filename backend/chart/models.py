from django.conf import settings
from django.db import models


class Chart(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )
    products = models.ManyToManyField('products.Product')

    def add_product(product):
        if product:
            self.products.add(product)
