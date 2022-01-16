
import { CookiesService } from './../../utils/services/cookies.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-cookie',
  templateUrl: './detail-cookie.component.html',
  styleUrls: ['./detail-cookie.component.css']
})
export class DetailCookieComponent implements OnInit {

  // public cookieSearched:any;

  constructor(public cookiesService:CookiesService) { }

  ngOnInit(): void {
  }
}
