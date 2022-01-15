import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/utils/services/auth.service';
import { StatusService } from 'src/app/utils/services/status.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  profile:any = {id:'',password:''};
  errorId:boolean = false;
  errorPass:boolean = false;

  constructor(private authService:AuthService, private state:StatusService) { }

  ngOnInit(): void {
  }

  auth(){
    // tester si l'identifiant fait 4 caractère minimum
    if((this.profile.id).length < 4){
      this.errorId = true;
    }
    // tester si le mot de passe fait 4 caractère minimum
    if((this.profile.password).length < 4){
      this.errorPass = true;
    }
    this.authService.getProfile(this.profile);
  }

  deconnecte(){
    this.state.connection = false;
    this.state.token = null;
  }

  getInputs(){
    console.log(this.profile);
  }

}
