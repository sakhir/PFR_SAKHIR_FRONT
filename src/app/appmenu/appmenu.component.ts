import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import jwt_decode from "jwt-decode"; 
@Component({
  selector: 'app-appmenu',
  templateUrl: './appmenu.component.html',
  styleUrls: ['./appmenu.component.css']
})
export class AppmenuComponent implements OnInit {
  user:any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.GetInfosUser();
  }
 
  GetUserConnectedById() {
    const decoded :any= jwt_decode(this.authService.getToken());
   return decoded.id;
}
GetInfosUser() {

  this.authService.GetUserBYId(this.GetUserConnectedById()).subscribe(
   data=>{
     this.user=data;
    //    console.log(this.user);
   },
   err =>console.log(err));
   
  }

}
