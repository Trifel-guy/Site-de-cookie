import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private quantityCart:number = 0;

  constructor() { }

  public save(quantity:number): void{
    this.quantityCart = quantity;
  }

  public getQuantityCart(): number{
    return this.quantityCart;
  }
}
