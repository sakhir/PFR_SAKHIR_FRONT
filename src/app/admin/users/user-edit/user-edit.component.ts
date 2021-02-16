import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/Users/User';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Data, Params } from '@angular/router';

import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup ,NgForm,Validators } from '@angular/forms';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User|any;
  id:number|any;
  selectedFile :File |any;
  UserForm: FormGroup |any;
  submitted = false;
  constructor(private usr:UsersService ,
    private route:ActivatedRoute ,private router: Router ,private formBuilder: FormBuilder) {

       this.route.params.subscribe(
       (p:Params)=>{
         this.id = +p['id'];
       
       }
     )
     }
     
     ngOnInit(): void {
      this.getOneUser();
      this.UserForm = this.formBuilder.group({
        emails: ['',[ Validators.required,Validators.email]],
        noms:['',[ Validators.required]],
        prenoms:['',[ Validators.required]],  
        adresses:[''],
        telephones:[''],
        profils:['',[ Validators.required]]
        
      })
     
     
    }
    active=false;
    ActiverChamps(event:any):boolean|any{
      if(event.target.value=="APPRENANT") {
        this.active=true;
      }
      else{
        this.active=false;
      }
      
    }
    
    get f(){
      return this.UserForm.controls
    }
    
      registerUserData = { 
          password:  'passer',
          nom: null,
          prenom: null,
          adresse: null,
          email: null,
          tel: null,
          profil: null,
          genre:null,
          avatar:File
         };
    
   defaultImage:string="/assets/avat.png";
    //je vais creer une fonction qui vva précharger une image pardefaut 
      image:File|any;
      url:string|any='null';
      selectImage(event:any) {
       
       this.selectedFile=<File>event.target.files[0];
       
       var reader= new FileReader();
       reader.readAsDataURL(event.target.files[0]);
       this.registerUserData.avatar=event.target.files[0];
      
       reader.onload=(event)=>{
        this.url=event.target!.result;
       
       }
      }
    
      reset(){
        this.UserForm.reset();
      }
      registerUser(id:any){

       
         this.submitted = true;
         if (this.UserForm.invalid) {
           return;
      }
     
     // console.log(this.registerUserData)

         this.usr.EditUser(this.user,id)
         .subscribe(
           (res:any) =>{
             console.log(this.user)         
             Swal.fire(
               'AJOUT AVEC SUCCES!',
               'success'
             )
            
        
            // this.router.navigateByUrl("/home")
         
           },
           (err:any) => { 
             console.log(err)
             //console.log(this.user)
             Swal.fire(
              
                 'Erreur lors de l ajout'
             )
           
         })
    }  


    //fonction qui recupére les profils 
  getOneUser() {
  
     this.usr.getUserBYId(this.id).subscribe(
     data=>{
      
      this.user=data;
      this.image=this.user.avatar;
      },
     err =>console.log(err));
     
    }

}
