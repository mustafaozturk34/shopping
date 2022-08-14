import { ToastrService } from 'ngx-toastr';
import { Basket } from './../../models/basket';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  @Input() basket:Basket[]
  total:number
  constructor(private toastrService:ToastrService) { }

  ngOnInit(): void {
  }
  deleteProductInBasket(productInBasket:Basket){
    let index = this.basket.indexOf(productInBasket)
    this.basket.splice(index,1)
    this.toastrService.info(productInBasket.product.name + " başarıyla silindi.")
    // if(this.basket.length == 0)
    // this.total = 0
  }

  basketTotal(){
    this.total = 0
    this.basket.forEach(element => {
      this.total += element.product.price * element.quantity
    })
    return this.total
  }

  changeQuantity(productInBasket:Basket){
    let quantity = parseInt((<HTMLInputElement>document.getElementById("basket-quantity-"+productInBasket.product.name)).value)
    this.basket.forEach(element => {
      if(productInBasket.product.name == element.product.name){
        element.quantity = quantity
      }
    });
  }

  payment(event:any) {
    if(this.total == event.total){
      this.basket.splice(0, this.basket.length)
      this.toastrService.info("Sipariş başarıyla verildi.")
    }
  }

}
