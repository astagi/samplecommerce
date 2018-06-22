import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private product: Product;

  constructor() { }

  ngOnInit() {
    this.product = new Product('Product 1', 20.0, 'Product 1 Desc', 'Product 1 Brief Desc');
  }

}
