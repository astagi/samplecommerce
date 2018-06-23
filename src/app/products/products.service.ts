import { Injectable } from '@angular/core';
import { Product } from './product';
import { forEach } from '@angular/router/src/utils/collection';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private products: Product[] = [];
  private productsUrl = 'http://localhost:8000/api/products/'

  constructor(private http: HttpClient) {
    this.products.push(new Product('Product 1', 20.0, 'Product 1 Desc', 'Product 1 Brief Desc'))
    this.products.push(new Product('Product 2', 30.0, 'Product 2 Desc', 'Product 2 Brief Desc'))
    this.products.push(new Product('Product 3', 50.0, 'Product 3 Desc', 'Product 3 Brief Desc'))
    this.products.push(new Product('Product 4', 60.0, 'Product 4 Desc', 'Product 4 Brief Desc'))
  }

  getProductsList():Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl)
  }

  getProduct(slug: string):Observable<Product>  {
    return this.http.get<Product>(this.productsUrl + slug)
  }

}
