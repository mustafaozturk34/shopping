import { Basket } from './../../models/basket';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  @Input() basket:Basket[]
  @Input() total:number
  constructor() { }

  ngOnInit(): void {
  }

}
