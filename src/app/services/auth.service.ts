import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { User } from '../Models/Users/User';

export const TOKEN_NAME: string = 'token';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn:boolean=false; // est ce que y a quelqu un qui s est connecté 
  connectedUser:User|any;
  baseUrl = "http://127.0.0.1:8000/api"
  jwt: string|any;
  roles: Array<string>|any;
  constructor(private http: HttpClient,private router: Router) { }

 


  getToken(): any {
    return localStorage.getItem(TOKEN_NAME);
  }

  setToken(token: string): void {
    localStorage.setItem("token", token);
    this.jwt = token;
  }


  //fonction de connexion
  login(email: string,password: string){
    return this.http.post(this.baseUrl+ "/login_check",{
       email,password
    })
  }
  
  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('roles');
    this.jwt = undefined;
    this.roles = undefined;
    this.router.navigateByUrl("/login")
  }
  // On va creer la fonction isLOgin qui permet de savoir si un utilisateur est connecté ou  non
  isLogin() {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  // Fonction qui permet de voir si in token donné est autorisé ou non 
  getAuthorizationToken() {
    const currentUser = JSON.stringify(localStorage.getItem('token'));
   // console.log(currentUser);
    return currentUser;
  }

  allUsers(){
  //Une fonction qui recupére tous les utilisateurs 

    return this.http.get<User[]>(this.baseUrl+ "/admin/users");
  }

  GetUserBYId(id:any){
    //Une fonction qui recupére tous les utilisateurs 
      return this.http.get<User[]>(this.baseUrl+ "/admin/users/"+id);
    }
 }
