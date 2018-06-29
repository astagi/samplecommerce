import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-widget',
  templateUrl: './cart-widget.component.html',
  styleUrls: ['./cart-widget.component.css']
})
export class CartWidgetComponent implements OnInit {

  private nProducts: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
