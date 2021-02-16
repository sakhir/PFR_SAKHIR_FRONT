import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FilRouge';

  constructor(private authService: AuthService ,private primengConfig: PrimeNGConfig) { 
    
  }
  ngOnInit() {
    this.primengConfig.ripple = true;
}

  // fonction qui vérifie si un utilisateur est connecté 
  isLogin(){  
    return   this.authService.isLogin();
  }

}
