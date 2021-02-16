import { Injectable } from '@angular/core';
import { Profils } from '../Models/Profil/Profil';
import { ProfilSortie } from '../Models/ProfSortie/ProfSortie';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/Users/User';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  baseUrl = "http://127.0.0.1:8000/api";

  constructor(private http: HttpClient) { }

  allProfils(page:number){
    //Une fonction qui recupére tous les profils 
  
      return this.http.get<Profils[]>(this.baseUrl+ "/admin/profils?archivage=0&page="+page);
    }
    
  addProfil(p:Profils)  {
    return this.http.post(this.baseUrl+ "/admin/profils",p);
    
  }

  EditProfil(id:any,libelle:string){
    return this.http.put(this.baseUrl+ "/admin/profils/"+id,{libelle});
  }
 
  DeleteProfil(id:any){
    return this.http.delete(this.baseUrl+ "/admin/profils/"+id);
  }
  DeleteProfilS(id:any){
    return this.http.delete(this.baseUrl+ "/admin/profilsorti/"+id);
  }
  addProfilSortie(p:ProfilSortie)  {
    return this.http.post(this.baseUrl+ "/admin/profilsorties",p);;
  }

  // les users d un profil  
  userDuProfil(id:number){
    return this.http.get<User[]>(this.baseUrl+ "/admin/profils/"+id+"/users");
  }

  // les profils de sortie
  allProfilsortie(page:number){
    //Une fonction qui recupére tous les profils de sortie  
  
      return this.http.get<ProfilSortie[]>(this.baseUrl+ "/admin/profilsorties?archivage=0&page="+page);
    }
    getProfilBYId(id:any){
      //Une fonction qui recupére  un profil
    
        return this.http.get<Profils[]>(this.baseUrl+ "/admin/profils/"+id);
      }
    
}
