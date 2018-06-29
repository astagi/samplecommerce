import { Injectable } from '@angular/core';
import { Cart } from '../cart/cart';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: 'root',
})
export class CartService {

  private cartUrl = 'http://localhost:8000/api/carts/personal'

  constructor(private http: HttpClient, private authService:AuthService) {}

  getMyCart():Observable<Cart> {
    return this.http.get<Cart>(this.cartUrl, this.authService.getAuthHeaders())
  }

}
