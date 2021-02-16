import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfilService } from 'src/app/services/profil.service';
import { Profils } from '../../Models/Profil/Profil';
import Swal from 'sweetalert2';
import { User } from 'src/app/Models/Users/User';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { UsersComponent } from 'src/app/admin/users/users.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  us:UsersComponent|any

  profils: Profils|any;
  pr: Profils|any;
  users: User|any;
  view = false;
  suiv = true;
  prec = false;
  page = 1;

  displayedColumns: string[] = ['id', 'libelle'];
  dataSource: MatTableDataSource<Profils>|any ;

  @ViewChild(MatPaginator) paginator: MatPaginator|any;
  @ViewChild(MatSort) sort: MatSort|any;

  p: any = {};
  libelle:string|any;
  profilForm: FormGroup |any;
  submitted = false;
  constructor(private profil:ProfilService,  private router: Router ,
    private formBuilder: FormBuilder 
    ) { }

  ngOnInit(): void {
  
    
    this.getProfils();
       //validation
       this.profilForm = this.formBuilder.group({
        libelle: ['',Validators.required]
      })
  }

  //fonction qui recupére les profils 
  getProfils() {

  this.profil.allProfils(this.page).subscribe(
   data=>{
     this.profils=data;
   //  console.log(this.profils);
   
     //console.log(this.profils);
     //this.datatable(this.profils);     
   },
   err =>console.log(err));
   
  }

  // datatable(data:any) {
  //   this.dataSource = new MatTableDataSource(data);
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;
  // }
  // applyFilter(filterValue: string) {
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }


//pagination
next(){
  this.page++;
  this.prec=true;
  this.getProfils();
  if (this.profils['length']==0) {
  
    this.prec = true;
    this.suiv = false;
  }
}

previous(){
  this.suiv = true;
  this.page--;
  this.getProfils();
  if (this.page == 1) {
    this.page = this.page;
    this.prec=false;
  }
} 

  get f(){
    return this.profilForm.controls;
  }
  //ajouter un profil
  addProfil(){
    this.submitted=true;
    if (this.profilForm.invalid) {
      return;
    }
 
    this.router.navigateByUrl("/home")
    this.ngOnInit();
     this.profil.addProfil(this.p).subscribe(data => {
       Swal.fire('Ajouté avec succes ...', 'profil ajouté', 'success') 
      
     })
     this.profilForm.value.libelle=' ';    

  } 


   //les users d'un profil
   usersProfil(id:number){
    this.view = true;
    this.profil.userDuProfil(id).subscribe(data => {
      this.pr= data;
      console.log(this.pr.users);
      
    })
  }

  SupprimerProfil(id:number){
    this.profil.DeleteProfil(id).subscribe(
      data=>{       
       this.ngOnInit(); 
       this.router.navigateByUrl("/home")
        Swal.fire('Suppression reuissie ...', 'Profil  archivé', 'success')  
       
      },
      err =>console.log(err));
  }
  

}
