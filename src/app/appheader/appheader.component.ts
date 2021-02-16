import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import jwt_decode from "jwt-decode"; 

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.css']
})
export class AppheaderComponent implements OnInit {
  user:any;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  this.GetInfosUser();
  }
  
// la fonction de deconnexion 
OnLogout() {
  this.authService.logOut();
 }

 AfficherDonnee() {
     const decoded :any= jwt_decode(this.authService.getToken());
    return decoded.id;
 }

//  GetInfosUser() {
//     return this.authService.GetUserBYId(this.AfficherDonnee());
//  }
 //fonction qui recupére les profils 
 GetInfosUser() {

  this.authService.GetUserBYId(this.AfficherDonnee()).subscribe(
   data=>{
     this.user=data;
    // console.log(this.user);
   },
   err =>console.log(err));
   
  }

 }
