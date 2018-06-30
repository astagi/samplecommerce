from products.models import Product
from cart.models import Cart, CartElement

from rest_framework import routers, serializers, viewsets


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CartElementSerializer(serializers.ModelSerializer):

    product = ProductSerializer()

    class Meta:
        model = CartElement
        fields = ('quantity', 'product')


class CartSerializer(serializers.ModelSerializer):

    products = CartElementSerializer(source='cartelement_set', many=True)
    total = serializers.SerializerMethodField()
    n_products = serializers.SerializerMethodField()

    class Meta:
        model = Cart
        fields = ('id', 'user', 'products', 'total', 'n_products')

    def get_n_products(self, obj):
        n_products = 0
        for cart_element in CartElement.objects.filter(cart=obj):
            n_products += cart_element.quantity
        return n_products

    def get_total(self, obj):
        total = 0
        for cart_element in CartElement.objects.filter(cart=obj):
            total += cart_element.quantity * cart_element.product.price
        return total
