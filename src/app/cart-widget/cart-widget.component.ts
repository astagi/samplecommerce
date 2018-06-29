import { Component, OnInit } from '@angular/core';
import { CartCommunicationService } from '../cart/cart-communication.service';
import { Cart } from '../cart/cart';

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.css']
})
export class CartWidgetComponent implements OnInit {

  private cart: Cart;

  constructor(private cartCommunicationService: CartCommunicationService) { }

  ngOnInit() {
    this.cartCommunicationService.getValue().subscribe(
      cart => {
        this.cart = cart
        if (!cart)
          return
        console.log(this.cart)
      }
    )
  }

}
