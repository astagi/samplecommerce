import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { CartWidgetComponent } from './cart-widget/cart-widget.component';

import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';


import {AuthGuardService as AuthGuard} from './auth/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { LogoutComponent } from './logout/logout.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'logout', component: LogoutComponent },
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
    LogoutComponent,
    NavigationBarComponent,
    HomeComponent,
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
