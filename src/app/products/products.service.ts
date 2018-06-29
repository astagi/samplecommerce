import { Injectable } from '@angular/core';
import { Cart } from '../cart/cart';
import { Product } from './product';
import { forEach } from '@angular/router/src/utils/collection';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private products: Product[] = [];
  private productsUrl = 'http://localhost:8000/api/products/'

  constructor(private http: HttpClient, private authService:AuthService) {}

  getProductsList():Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
  }

  getProduct(slug: string):Observable<Product>  {
    return this.http.get<Product>(this.productsUrl + slug)
  }

  addProductToCart(product: Product):Observable<Cart> {
    return this.http.post<Cart>(
      `${this.productsUrl}${product.slug}/add_to_cart/`, {},
      this.authService.getAuthHeaders()
    )
  }

  removeProductFromCart(product: Product):Observable<Cart> {
    return this.http.post<Cart>(
      `${this.productsUrl}${product.slug}/remove_from_cart/`, {},
      this.authService.getAuthHeaders()
    )
  }

}
