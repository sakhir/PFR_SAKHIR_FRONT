import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/Users/User';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  
  users: User|any;
  view = false;
  suiv = true;
  prec = false;
  page = 1;
  constructor(private usr:UsersService,private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }
  

//fonction qui recupére les profils 
getUsers() {

  this.usr.getUsers(this.page).subscribe(
   data=>{
    
     this.users=data;  
     //console.log(data);   
   },
   err =>console.log(err));
   
  }
  DeleteUser(id:any){
    this.usr.DeleteUser(id).subscribe(
      data=>{
       
        this.users=data;  
       // console.log(data); 
       this.ngOnInit(); 
        Swal.fire('Suppression reuissie ...', 'Utilisateur supprimé', 'success')  
      },
      err =>console.log(err));
      
  }

 //pagination
 next(){
  this.page++;
  this.prec=true;
  this.getUsers();
  if (this.users['length']==0) {
    //console.log(this.profils)
    this.prec = true;
    this.suiv = false;
  }
}

previous(){
  this.suiv = true;
  this.page--;
  this.getUsers();
  if (this.page == 1) {
    this.page = this.page;
    this.prec=false;
  }
} 
}
