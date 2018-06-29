from products.models import Product
from chart.models import Chart

from rest_framework import routers, serializers, viewsets


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'


class CartSerializer(serializers.ModelSerializer):

    products = ProductSerializer(many=True)
    cart_items_count = serializers.SerializerMethodField()

    class Meta:
        model = Chart
        fields = ('id', 'user','products', 'cart_items_count')

    def get_cart_items_count(self, obj):
        return obj.products.count()
