from django.urls import include, path
from rest_framework import routers
from rest_framework.authtoken import views

from .views import ProductsViewSet, CartViewSet


router = routers.DefaultRouter()
router.register(r'products', ProductsViewSet)
router.register(r'carts', CartViewSet, base_name='carts')

urlpatterns = [
    path('', include(router.urls)),
    path('api-token-auth/', views.obtain_auth_token)
]
