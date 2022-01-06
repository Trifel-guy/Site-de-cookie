import { Component, OnInit } from '@angular/core';
import { ICookie } from 'src/app/utils/models/icookie';
import { CookiesService } from 'src/app/utils/services/cookies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  // cookies:Array<ICookie> = [];
  
  constructor(public cookiesService:CookiesService) { }

  ngOnInit(): void {
  }

}
