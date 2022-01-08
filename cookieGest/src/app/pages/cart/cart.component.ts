import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  private quantity:number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  public increaseQuantity(): void {
    this.quantity += 1;
  }


  public getQuantity(): number {
    return this.quantity;
  }

}
