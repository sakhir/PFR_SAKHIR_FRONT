import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/Users/User';
import { UsersService } from 'src/app/services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-users-del',
  templateUrl: './list-users-del.component.html',
  styleUrls: ['./list-users-del.component.css']
})
export class ListUsersDelComponent implements OnInit {
  users: User|any;
  view = false;
  suiv = true;
  prec = false;
  page = 1;
  constructor(private usr:UsersService) { }

  ngOnInit(): void {
    this.getUsersDeleted();
  }
//fonction qui recupére les profils 
getUsersDeleted() {

  this.usr.getUsersdeleted(this.page).subscribe(
   data=>{
    
     this.users=data;  
     //console.log(data);   
   },
   err =>console.log(err));
   
  }

  Reintegrer(id:any){
    this.usr.reintegrer(id).subscribe(
      data=>{
       
        this.users=data;  
        console.log(data);
        this.ngOnInit(); 
        Swal.fire('Utilisateur réintegré ...', 'utilisateur  actif a nouveau', 'success')  
      },
      err =>console.log(err));
      
  }
  //pagination
 next(){
  this.page++;
  this.prec=true;
  this.getUsersDeleted();
  if (this.users['length']==0) {
    //console.log(this.profils)
    this.prec = true;
    this.suiv = false;
  }
}

previous(){
  this.suiv = true;
  this.page--;
  this.getUsersDeleted();
  if (this.page == 1) {
    this.page = this.page;
    this.prec=false;
  }
}
}
