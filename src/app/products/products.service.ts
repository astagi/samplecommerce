import { Injectable } from '@angular/core';
import { Product } from './product';
import { forEach } from '@angular/router/src/utils/collection';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  private products: Product[] = [];

  constructor() {
    this.products.push(new Product('Product 1', 20.0, 'Product 1 Desc', 'Product 1 Brief Desc'))
    this.products.push(new Product('Product 2', 30.0, 'Product 2 Desc', 'Product 2 Brief Desc'))
    this.products.push(new Product('Product 3', 50.0, 'Product 3 Desc', 'Product 3 Brief Desc'))
    this.products.push(new Product('Product 4', 60.0, 'Product 4 Desc', 'Product 4 Brief Desc'))
  }


  getProductsList():Product[] {
    return this.products;
  }


  getProduct(slug: string):Product {
    for (let product of this.products) {
      if (product.slug == slug) {
        return product
      }
    }
  }

}
