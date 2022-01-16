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
    return this.totalPrice;
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
    // window.alert('Article corectement ajouté au panier');
    console.log(this.cart);
  }

  removeCookieInCart(cookie: ICookie) {
    // this.quantityCart += 1;
    if(this.cookieExistIn(cookie) && cookie.quantity > 1 ){
      cookie.quantity -= 1;
      this.quantityCart -= 1;
    }
    else{
      this.quantityCart -= 1;
      this.cart.forEach((cook,index)=>{
        if(cook._id === cookie._id) this.cart.splice(index,1);
      });
    }
    console.log(this.cart);
  }

  // tester si un cookie existe déjà dans le panier (dans l'array cart)
  cookieExistIn(cookie:ICookie) {
    return this.cart.some(function(el) {
      return el._id === cookie._id;
    }); 
  }

  clearCart() {
    this.cart = [];
    // return this.cart;
  }
  saveCart(cart:Array<ICookie>){
    
  }
}