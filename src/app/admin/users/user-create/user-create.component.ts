import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup ,NgForm,Validators } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service' ;
import { isEmptyBindingElement } from 'typescript';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  selectedFile :File |any;
  UserForm: FormGroup |any;
  submitted = false;
  constructor( private authService:   UsersService ,private router: Router ,private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.UserForm = this.formBuilder.group({
      emails: ['',[ Validators.required,Validators.email]],
      noms:['',[ Validators.required]],
      prenoms:['',[ Validators.required]],  
      adresses:[''],
      telephones:[''],
      profil:['',[ Validators.required]]
      
    })
  }


  active=false;
// fonction qui permet de charger des champs si le profil est apprenant 

ActiverChamps(event:any):boolean|any{
  if(event.target.value=="APPRENANT") {
    this.active=true;
    console.log(this.active);
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

     public src:string="../../../../assets/av.png";
//je vais creer une fonction qui vva précharger une image pardefaut 

  url:string|any="../../../../assets/av.png";
  selectImage(event:any) {
   
   this.selectedFile=<File>event.target.files[0];
   console.log(this.selectedFile);
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
  registerUser(){
 
    this.submitted = true;
    if (this.UserForm.invalid) {
      return;
  }

    this.authService.registerUser(this.registerUserData)
    .subscribe(
      (res:any) =>{
       // console.log(this.registerUserData)  
       this.router.navigateByUrl("/home");       
        Swal.fire(
          'AJOUT AVEC SUCCES!',
          'success'
        )
        
    
       // this.router.navigateByUrl("/home")
     
      },
      (err:any) => { 
        console.log(err)
        console.log(this.registerUserData)
        Swal.fire(
          
            'Erreur lors de l ajout'
        )
       
     })
}
  // UNe fonction pour l image 
  // handleFileInput(file : FileList){
  //   this.registerUserData.imageName = file.item(0);

  //   //show image preview 
  //   var reader =  new  FileReader();
  //   reader.onload = (event:any) => {
  //     this.imageUrl = event.target.result;
  //   }
  //   reader.readAsDataURL(this.registerUserData.imageName);
  // }


}