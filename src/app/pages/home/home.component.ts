import { Basket } from './../../models/basket';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  basket:Basket[]
  total:number
  constructor() { }

  ngOnInit(): void {
  }

  getBasket(event: any) {
    this.basket = event.data
    this.total = event.total
  }
}
