import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/Users/User';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Data, Params } from '@angular/router';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User|any;
  id:number|any;
  constructor(private usr:UsersService ,
    private route:ActivatedRoute) {

       this.route.params.subscribe(
       (p:Params)=>{
         this.id = +p['id'];
         //this.user=this.usr.getUserBYId(this.id);
         //console.log(this.id);
       
       }
     )
     }

  ngOnInit(): void {
    this.getOneUser();
  }

  //fonction qui recupére les profils 
getOneUser() {

   this.usr.getUserBYId(this.id).subscribe(
   data=>{
    
    this.user=data;  
    // console.log(data);   
    },
   err =>console.log(err));
   
  }
}
