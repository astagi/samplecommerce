import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { CartCommunicationService } from '../cart/cart-communication.service';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username:string;
  private password:string;

  constructor(
    private authService:AuthService,
    private cartService: CartService,
    private cartCommunicationService: CartCommunicationService,
    private router: Router
  ) { }

  ngOnInit() {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      result => {
        this.cartService.getMyCart().subscribe(
          cart => {
            this.cartCommunicationService.setValue(cart)
            this.router.navigateByUrl('/cart')
          }

        )
      }
    )
  }

}
