import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ChartWidgetComponent } from './chart-widget/chart-widget.component';

import { RouterModule, Routes } from '@angular/router';


const appRoutes: Routes = [
  { path: 'chart', component: ChartComponent },
  { path: 'products', component: ProductsListComponent },
  { path: 'products/:slug', component: ProductDetailComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    ProductsListComponent,
    ProductDetailComponent,
    ChartWidgetComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
