import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Cart } from '../cart/cart';
import { ProductsService } from '../products/products.service';
import { Product } from '../products/product';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cart: Cart;

  constructor(private cartService:CartService, private productService:ProductsService) { }

  ngOnInit() {
    this.cartService.getMyCart().subscribe(cart => this.cart = cart)
  }

  removeProduct(product: Product) {
    this.productService.removeProductFromCart(product).subscribe(
      res => {
        this.cart.products = this.cart.products.filter(obj => obj !== product)
      }
    )
  }

}
