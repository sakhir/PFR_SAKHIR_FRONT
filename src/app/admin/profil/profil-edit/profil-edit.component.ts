import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfilService } from 'src/app/services/profil.service';
import { Profils } from '../../../Models/Profil/Profil';
import { ActivatedRoute, Data, Params } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profil-edit',
  templateUrl: './profil-edit.component.html',
  styleUrls: ['./profil-edit.component.css']
})
export class ProfilEditComponent implements OnInit {
  profils: Profils|any;
  p: any = {};
  id:number|any;
  libelle:string|any;
  profilForm: FormGroup |any;
  submitted = false;
  constructor( private route:ActivatedRoute,private profil:ProfilService,  private router: Router ,
    private formBuilder: FormBuilder) {
      this.route.params.subscribe(
        (p:Params)=>{
          this.id = +p['id'];
        
        }
      )
      
     }

  ngOnInit(): void {
    this.getOneProfil();
    this.profilForm = this.formBuilder.group({
      libelle: ['',Validators.required]
      
    })
  }
  get f(){
    return this.profilForm.controls;
  }
  getOneProfil() {
  
    this.profil.getProfilBYId(this.id).subscribe(
    data=>{
     
     this.profils=data;   
     
     },
    err =>console.log(err));
    
   }
   //ajouter un profil
   EditProfil(){
    this.submitted=true;
    if (this.profilForm.invalid) {
      return;
    }   
    
    
     this.profil.EditProfil(this.id,this.profilForm.value.libelle).subscribe(data => {
     // console.log(data);
          Swal.fire('Modification reuissie ...', 'profil modifié', 'success') 
     })
     //this.profilForm.value.libelle=' ';  
     this.router.navigateByUrl("/home")  
     
     

  }
}
