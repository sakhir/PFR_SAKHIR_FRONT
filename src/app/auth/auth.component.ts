import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';
import jwt_decode from "jwt-decode"; 

import { NgModel} from '@angular/forms';

import { User } from "../Models/Users/User";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css','./utils.css','../../assets/vendor/bootstrap/css/bootstrap.min.css','../../assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css',
 '../../assets/vendor/animate/animate.css','../../assets/vendor/css-hamburgers/hamburgers.min.css','../../assets/vendor/select2/select2.min.css']
})
export class AuthComponent implements OnInit {
  email : string | any;
  password : string | any;
  formLogin : FormGroup | any;
  submitted = false;
  loggedIn:boolean=false; // est ce que y a quelqu un qui s est connecté   

  constructor(private authService: AuthService,private formBuilder: FormBuilder ,private router:Router) { 
    
     
  }

  ngOnInit(): void {
      this.formLogin = this.formBuilder.group({
        email: ['',[ Validators.required,Validators.email]],
        password: ['',[ Validators.required,Validators.minLength(6)]]
      })
  }
  get f(){
    return this.formLogin.controls
  }

 

  
  onSubmit(){
   this.submitted = true;
    if (this.formLogin.invalid) {
      return;
  }
   
    // le triatement si le formulaire est valid 
  
    
    this.authService.login(this.email,this.password).subscribe( (data:any) => {
    
       localStorage.setItem('token',data.token);
       
       const decoded :any= jwt_decode(data.token);
      //console.log(decoded);
      
  if(decoded.roles[0]=="ROLE_ADMIN") {
   this.router.navigateByUrl('/home');
   this.loggedIn=true;
   //console.log("ok");
  } 

    },err => console.log(err))
    
  }

 
   

}

