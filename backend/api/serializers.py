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

    class Meta:
        model = Cart
        fields = ('id', 'user', 'products')

