from django.contrib import admin
from .models import Cart, CartElement


class CartAdmin(admin.ModelAdmin):
    pass

class CartElementAdmin(admin.ModelAdmin):
    pass


admin.site.register(Cart, CartAdmin)
admin.site.register(CartElement, CartElementAdmin)
