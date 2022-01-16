import { StatusService } from './../../utils/services/status.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit {

  constructor(public statusService:StatusService) { }

  ngOnInit(): void {
  }

}
