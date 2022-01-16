import { StatusService } from './../../utils/services/status.service';
import { HomeComponent } from './../../pages/home/home.component';
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/utils/services/cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public cartService:CartService, public statusService:StatusService) { }

  ngOnInit(): void {
  }

}
