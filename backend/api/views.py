from django.shortcuts import render
from products.models import Product

from rest_framework import viewsets

from .serializers import ProductSerializer


class ProductsViewSet(viewsets.ModelViewSet):
    lookup_field = 'slug'
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
