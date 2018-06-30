import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return this.authService.isAuthenticated()
  }

}
