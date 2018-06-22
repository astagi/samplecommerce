import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  private products: Product[] = [];

  constructor() { }

  ngOnInit() {
    this.products.push(new Product('Product 1', 20.0, 'Product 1 Desc', 'Product 1 Brief Desc'))
    this.products.push(new Product('Product 2', 30.0, 'Product 2 Desc', 'Product 2 Brief Desc'))
    this.products.push(new Product('Product 3', 50.0, 'Product 3 Desc', 'Product 3 Brief Desc'))
    this.products.push(new Product('Product 4', 60.0, 'Product 4 Desc', 'Product 4 Brief Desc'))
  }
}
