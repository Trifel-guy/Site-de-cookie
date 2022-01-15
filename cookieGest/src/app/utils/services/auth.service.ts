import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatusService } from './status.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  /* object directly connected to the html*/
  profile:any = {id:'',password:''};


  constructor(private http:HttpClient, private statusService:StatusService) { }

  // '/assets/id/${monId}/${monMdp}.json'

  getProfile(profile:any){
    this.http.get(`/assets/id/${profile.id}@${profile.password}.json`).subscribe(
      p => {
        console.log(p);
        console.log(Object.values(p)[11])
        this.profile = p;
        this.statusService.connection = true;
        // if (this.profile.token) this.statusService.token = Object.values(p)[11]; 
        if (this.profile.token) this.statusService.token = this.profile.token;
      },
      erreur => {
        console.log("Erreur: Dans l'authentification");
        this.statusService.connection = false;
        
      }
    )
  }
}
