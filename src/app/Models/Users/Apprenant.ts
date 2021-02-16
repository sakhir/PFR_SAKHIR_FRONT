import { User } from "./User";
 class Apprenant  extends User {
    telephone: string;
    genre :string;
    addresse :string;
    statut:string ;

    constructor( telephone :string  , genre: string ,addresse :string ,statut :string ,
        id :number , email: string ,password :string ,  prenom :string ,nom :string , avatar :string ,IsDeleted:number ,IsConnect:number
        ) {
        super(id,email,password,prenom,nom,avatar,IsDeleted,IsConnect);
        
        this.telephone=telephone;
        this.genre=genre;
        this.addresse=addresse;
        this.statut=statut;
       
   }

 }