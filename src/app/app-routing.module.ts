import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetenceCreateComponent } from './admin/competence/competence-create/competence-create.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { GrpcCreateComponent } from './admin/group-competence/grpc-create/grpc-create.component';
import { ProfilEditComponent } from './admin/profil/profil-edit/profil-edit.component';
import { RefCreateComponent } from './admin/referentiel/ref-create/ref-create.component';
import { ListUsersDelComponent } from './admin/users/list-users-del/list-users-del.component';
import { UserCreateComponent } from './admin/users/user-create/user-create.component';
import { UserDetailComponent } from './admin/users/user-detail/user-detail.component';
import { UserEditComponent } from './admin/users/user-edit/user-edit.component';
import { UsersComponent } from './admin/users/users.component';



import { AuthComponent } from './auth/auth.component';


const routes: Routes = [

//  {path:'home',component:DashboardComponent},
 
  // { path: '',   redirectTo: 'login', pathMatch: 'full' },
  {path:'login',component:AuthComponent},
  {path:'home',component:DashboardComponent},
  {path:'create-user',component:UserCreateComponent},
  {path:'detail-user/:id',component:UserDetailComponent},
  {path:'user-edit/:id',component:UserEditComponent},
  {path:'list-users-del',component:ListUsersDelComponent},
  {path:'profil-edit/:id',component:ProfilEditComponent},
  {path:'create-grp-competence',component:GrpcCreateComponent},
  {path:'create-referentiel',component:RefCreateComponent},
  {path:'create-competence',component:CompetenceCreateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
