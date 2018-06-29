from django.db import models
from django.conf import settings


class Cart(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
    )

    def add_product(self, product, quantity):
        if product:
            cart_element, created = CartElement.objects.get_or_create(
                cart=self,
                product=product
            )
            if created:
                cart_element.quantity = quantity
            else:
                cart_element.quantity += quantity
            cart_element.save()

    def remove_product(self, product):
        if product:
            CartElement.objects.get(
                cart=self,
                product=product
            ).delete()

    def update_product_quantity(self, product, quantity):
        if product:
            cart_element, created = CartElement.objects.get_or_create(
                cart=self,
                product=product
            )
            cart_element.quantity = quantity
            cart_element.save()


class CartElement(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
