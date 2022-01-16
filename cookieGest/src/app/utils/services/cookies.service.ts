import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICookie } from '../models/icookie';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  listCookies:Array<ICookie> = [];
  cookiesDetails:Array<ICookie> = [];
  urlGetCookies:string = "http://localhost:3001/cookies";
  

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

  // get cookies from server.js
  // getCookies(){
  //   this.http.get<Array<ICookie>>(this.urlGetCookies).subscribe(
  //     data => {
  //       this.listCookies = data;
  //       console.log(data);
  //     }
  //   )
  // }

  postCookies(data:Array<ICookie>) {
    return this.http.post(this.urlGetCookies, data)
  }

  // get cookie by id
  getCookiesById(id:number){
    this.cookiesDetails = this.listCookies.filter(e => e._id === id);
    console.log(this.cookiesDetails);
  }

  
}


