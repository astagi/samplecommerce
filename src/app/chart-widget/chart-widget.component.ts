import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.css']
})
export class ChartWidgetComponent implements OnInit {

  private nProducts: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
