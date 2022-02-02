import { Injectable } from '@angular/core';
import { ICookie } from '../models/icookie';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private quantityCart:number = 0;
  private totalPrice:number = 0;
  cart:Array<ICookie> = [];
  

  constructor(private http:HttpClient) { }

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


  //vider le panier
  clearCart() {
    this.cart = [];
  }
  
  postCart(cart:any) {
    return this.http.post<any>('http://localhost:3000/posts', cart)
    .subscribe(map((res:any)=>{
      return res;
    }))
  }

  getCart(){
    return this.http.get<any>('http://localhost:3000/posts')
    .subscribe(res=>{
      console.log('res', res);
      return res;
      // this.cart = res;
      
    })
  }
  
}
