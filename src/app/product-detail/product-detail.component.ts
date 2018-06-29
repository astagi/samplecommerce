import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';
import { ProductsService } from '../products/products.service';
import { CartCommunicationService } from '../cart/cart-communication.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  private product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService:ProductsService,
    private cartCommunicationService: CartCommunicationService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productsService.getProduct(params.get('slug')).subscribe(
        product => this.product = product
      )
    });
  }

  addToCart(quantity: number) {
    this.productsService.addProductToCart(this.product, quantity).subscribe(
      res => {
        this.cartCommunicationService.setValue(res)
      }
    )
  }

}
