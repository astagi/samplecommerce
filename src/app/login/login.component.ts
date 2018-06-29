import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username:string;
  private password:string;

  constructor(private authService:AuthService, private router: Router) { }

  ngOnInit() {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      result => {
        this.router.navigateByUrl('/cart');
      }
    )
  }

}
