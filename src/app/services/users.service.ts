import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Models/Users/User';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseUrl = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  getUsers(page:number){
    //Une fonction qui recupére tous les users 
  
      return this.http.get<User[]>(this.baseUrl+ "/admin/users?isdeleted=0&order[prenom]=ASC&page="+page);
    }

    getUsersdeleted(page:number){
      return this.http.get<User[]>(this.baseUrl+ "/admin/users-deleted?page="+page);
    
    }  
    getUserBYId(id:any){
      //Une fonction qui recupére  un user 
    
        return this.http.get<User[]>(this.baseUrl+ "/admin/users/"+id);
      }
     
      reintegrer(id:any){
        return this.http.delete<User[]>(this.baseUrl+ "/admin/users-integre/"+id);
      }
      DeleteUser(id:any){
        return this.http.delete<User[]>(this.baseUrl+ "/admin/users/"+id);
      }

    registerUser(User:any) {

      const formData: FormData = new FormData();
      formData.append('password', User.password);
      User.nom=User.nom.toUpperCase()
      formData.append('nom', User.nom);
      User.prenom=(User.prenom.charAt(0).toUpperCase() + User.prenom.substring(1).toLowerCase());
      formData.append('prenom', User.prenom);
      User.email=User.email.toLowerCase();
      formData.append('email', User.email);
      formData.append('avatar', User.avatar);
      console.log(User.avatar);
      formData.append('profil', User.profil);
      if (User.profil="APPRENANT") {
        formData.append('addresse', User.adresse);
        formData.append('telephone', User.tel);
        formData.append('genre', User.genre);
      }

      console.log(formData);
      
      return this.http.post(this.baseUrl+ "/admin/users",formData);
    
        
    }

    EditUser(User:any,id:any) {
     
      const formData: FormData = new FormData();
      formData.append('password', 'passer');
      User.nom=User.nom.toUpperCase();
      formData.append('nom', User.nom);
      User.prenom=(User.prenom.charAt(0).toUpperCase() + User.prenom.substring(1).toLowerCase());
      formData.append('prenom', User.prenom);
      User.email=User.email.toLowerCase();
      formData.append('email', User.email);
      formData.append('avatar', User.avatar);
      formData.append('profil', User.profil.libelle);
      console.log(User.profil.libelle);
      if (User.profil.libelle="APPRENANT") {
      
        formData.append('adresse', User.adresse);
        formData.append('telephone', User.tel);
        formData.append('genre', User.genre);
      }
      return this.http.post(this.baseUrl+ "/admin/users/"+id,formData); 
    }
}
