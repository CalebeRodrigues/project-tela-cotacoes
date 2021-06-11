import { Component, Input, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/StockModel';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css']
})
export class StockCardComponent implements OnInit {

  @Input()
  stock = new Stock();

  constructor() { }

  ngOnInit(): void {
  }

}
