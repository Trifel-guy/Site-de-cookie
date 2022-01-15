import { Component, OnInit } from '@angular/core';
import { ICookie } from 'src/app/utils/models/icookie';
import { CartService } from 'src/app/utils/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private quantity:number = 0;
  private listCookie:Array<ICookie> = [];

  constructor(public cartService:CartService) { }

  ngOnInit(): void {
  }

  public increaseQuantity(): void {
    this.quantity += 1;
  }

  public getQuantity(): number {
    return this.quantity;
  }

}
