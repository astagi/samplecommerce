import { Component } from '@angular/core';
import { CartCommunicationService } from './cart/cart-communication.service';
import { CartService } from './cart/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(
    private cartCommunicationService: CartCommunicationService,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    this.cartService.getMyCart().subscribe(
      cart => this.cartCommunicationService.setValue(cart)
    )
  }

}
