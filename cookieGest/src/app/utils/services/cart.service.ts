import { Injectable } from '@angular/core';
import { ICookie } from '../models/icookie';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private quantityCart:number = 0;
  private totalPrice:number = 0;
  cart:Array<ICookie> = [];
  

  constructor() { }

  public getQuantityCart(): number{
    return this.quantityCart;
  }

  public getTotalPrice(): number{
    return this.totalPrice
  }

  addCookieInCart(cookie: ICookie) {
    // this.quantityCart += 1;
    if(this.cookieExistIn(cookie )){
      cookie.quantity += 1;
      this.quantityCart += 1;
    }
    else{
      cookie.quantity += 1;
      this.quantityCart += 1;
      this.cart.push(cookie);
    }
    console.log(this.cart);
  }

  // tester si un cookie existe déjà dans le panier (dans l'array cart)
  cookieExistIn(cookie:ICookie) {
    return this.cart.some(function(el) {
      return el._id === cookie._id;
    }); 
  }
}
