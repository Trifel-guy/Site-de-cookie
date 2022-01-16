import { Component, OnInit } from '@angular/core';
import { ICookie } from 'src/app/utils/models/icookie';
import { CartService } from 'src/app/utils/services/cart.service';
import { CookiesService } from 'src/app/utils/services/cookies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  // cookies:Array<ICookie> = [];
  private quantity:number = 0;
  success: boolean = false;
  public cart:any;
  
  constructor(public cookiesService:CookiesService, private cartService:CartService) { }
  
  // private quantity:number = this.cartService.getQuantityCart();

  ngOnInit(): void {
  }

  public getQuantity():number{
    return this.quantity;
  }

  public addCart(cookie:ICookie){
    this.cartService.addCookieInCart(cookie);
    this.success = true;
  }

  public closeAlert() {
    this.success = false;
  }

}
