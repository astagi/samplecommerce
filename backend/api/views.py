from django.shortcuts import render
from products.models import Product
from cart.models import Cart

from rest_framework import viewsets, status, mixins
from rest_framework.decorators import detail_route, list_route
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .serializers import ProductSerializer, CartSerializer


class ProductsViewSet(
    mixins.RetrieveModelMixin,
    mixins.ListModelMixin,
    viewsets.GenericViewSet
):

    lookup_field = 'slug'
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    @detail_route(methods=['POST'], permission_classes = (IsAuthenticated,))
    def add_to_cart(self, request, slug=None):
        cart, _ = Cart.objects.get_or_create(user=request.user)
        cart.add_product(self.get_object(), request.data['quantity'])
        serializer = CartSerializer(cart)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @detail_route(methods=['POST'], permission_classes = (IsAuthenticated,))
    def remove_from_cart(self, request, slug=None):
        cart, _ = Cart.objects.get_or_create(user=request.user)
        cart.remove_product(self.get_object())
        serializer = CartSerializer(cart)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @detail_route(methods=['POST'], permission_classes = (IsAuthenticated,))
    def update_from_cart(self, request, slug=None):
        cart, _ = Cart.objects.get_or_create(user=request.user)
        cart.update_product_quantity(self.get_object(), request.data['quantity'])
        serializer = CartSerializer(cart)
        return Response(serializer.data, status=status.HTTP_200_OK)


class CartViewSet(viewsets.GenericViewSet):

    @list_route(methods=['GET'], permission_classes = (IsAuthenticated,))
    def personal(self, request):
        cart, _ = Cart.objects.get_or_create(user=request.user)
        serializer = CartSerializer(cart)
        return Response(serializer.data, status=status.HTTP_200_OK)
