import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  connection:boolean = false;
  // token:unknown = null;
  token:unknown = 'LeTokenPermettantDeVerifierSiLaRequeteEstValide';
  constructor() { }
}
