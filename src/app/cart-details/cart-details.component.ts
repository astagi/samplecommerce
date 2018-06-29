import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Cart } from '../cart/cart';
import { ProductsService } from '../products/products.service';
import { CartElement } from '../cart/cart-element';
import { CartCommunicationService } from '../cart/cart-communication.service';


@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {

  cart: Cart;

  constructor(
    private cartService:CartService,
    private productService:ProductsService,
    private cartCommunicationService: CartCommunicationService
  ) { }

  ngOnInit() {
    this.cartService.getMyCart().subscribe(cart => this.cart = cart)
  }

  removeProduct(cartElement: CartElement) {
    this.productService.removeProductFromCart(cartElement.product).subscribe(
      res => {
        this.cart.products = this.cart.products.filter(obj => obj !== cartElement)
        this.cartCommunicationService.setValue(res)
      }
    )
  }

  updateQuantity(cartElement: CartElement) {
    this.productService.updateProductFromCart(cartElement.product, cartElement.quantity).subscribe(
      res => {
        this.cartCommunicationService.setValue(res)
      }
    )
  }

}
