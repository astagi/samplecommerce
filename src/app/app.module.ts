import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartWidgetComponent } from './cart-widget/cart-widget.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';


import {
  AuthGuardService as AuthGuard, AuthGuardService
} from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: CartDetailsComponent, canActivate: [AuthGuard]  },
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:slug', component: ProductDetailComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    CartDetailsComponent,
    ProductsListComponent,
    ProductDetailComponent,
    CartWidgetComponent,
    LoginComponent,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
