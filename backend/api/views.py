from django.shortcuts import render
from products.models import Product
from chart.models import Chart

from rest_framework import viewsets, status
from rest_framework.decorators import detail_route, list_route
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


from .serializers import ProductSerializer, CartSerializer


class ProductsViewSet(viewsets.ModelViewSet):
    lookup_field = 'slug'
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    @detail_route(methods=['POST'], permission_classes = (IsAuthenticated,))
    def add_to_cart(self, request, slug=None):
        cart, _ = Chart.objects.get_or_create(user=request.user)
        cart.add_product(self.get_object())
        serializer = CartSerializer(cart)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @detail_route(methods=['POST'], permission_classes = (IsAuthenticated,))
    def remove_from_cart(self, request, slug=None):
        cart, _ = Chart.objects.get_or_create(user=request.user)
        cart.remove_product(self.get_object())
        serializer = CartSerializer(cart)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @list_route(methods=['GET'], permission_classes = (IsAuthenticated,))
    def cart(self, request):
        cart, _ = Chart.objects.get_or_create(user=request.user)
        serializer = CartSerializer(cart)
        return Response(serializer.data, status=status.HTTP_200_OK)
