import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICookie } from '../models/icookie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  listCookies:Array<ICookie> = [];
  // quantity:number = 0;

  constructor(private http:HttpClient) { 
    this.getCookies(); 
  }

  /** Method for get the extern datas with ajax  */
  getCookies(){
    this.http.get<Array<ICookie>>(environment.SERVEUR_URL+'listCookies.json').subscribe(
      data => {
        this.listCookies = data;
        console.log(data);
      }
    )
  }

  
}


