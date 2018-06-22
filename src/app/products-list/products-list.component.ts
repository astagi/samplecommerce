import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  private products: Product[] = [];

  constructor(private productsService:ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProductsList()
  }
}
