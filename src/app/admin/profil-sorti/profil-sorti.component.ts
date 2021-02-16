import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfilService } from 'src/app/services/profil.service';
import { ProfilSortie } from '../../Models/ProfSortie/ProfSortie';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profil-sorti',
  templateUrl: './profil-sorti.component.html',
  styleUrls: ['./profil-sorti.component.css']
})
export class ProfilSortiComponent implements OnInit {

  profilso: ProfilSortie|any;
  view = false;
  suiv = true;
  prec = false;
  page = 1;

  p: any = {};
  libelle:string|any;
  profilsForm: FormGroup |any;
  submitted = false;
  constructor(private profil:ProfilService,  private router: Router ,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getProfilSortie();
      //validation
      this.profilsForm = this.formBuilder.group({
        libelle: ['',Validators.required]
      })
  }


    //fonction qui recupére les profils de sortie  
    getProfilSortie() {

      this.profil.allProfilsortie(this.page).subscribe(
       data=>{
         this.profilso=data;
         console.log(this.profilso.length);
       
         //console.log(this.profils);
        },
       err =>console.log(err));
       
      }
    
//pagination
next(){
  this.page++;
  this.prec=true;
  this.getProfilSortie();
  if (this.profilso['length']==0) {
  
    this.prec = true;
    this.suiv = false;
  }
}

previous(){
  this.suiv = true;
  this.page--;
  this.getProfilSortie();
  if (this.page == 1) {
    this.page = this.page;
    this.prec=false;
  }
} 

  get f(){
    return this.profilsForm.controls;
  }

  //ajouter un profil
  addProfilSortie(){
    this.submitted=true;
    if (this.profilsForm.invalid) {
      return;
    }
    this.profil.addProfilSortie(this.p).subscribe(data => {
      Swal.fire('Ajouté avec succes ...', 'profil de sortie ajouté', 'success') 
      this.router.navigateByUrl("/home")
    })

  }

  //Supprimer profil de sortie 
  SupprimerProfilS(id:number){
    this.profil.DeleteProfilS(id).subscribe(
      data=>{       
       this.ngOnInit(); 
       this.router.navigateByUrl("/home")
        Swal.fire('Suppression reuissie ...', 'Profil sortie   archivé', 'success')  
       
      },
      err =>console.log(err));
  }
   
}
