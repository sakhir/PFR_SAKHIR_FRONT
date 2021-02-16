import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { AppsettingComponent } from './appsetting/appsetting.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ProfilComponent } from './admin/profil/profil.component';
import { UsersComponent } from './admin/users/users.component';
import { ProfilSortiComponent } from './admin/profil-sorti/profil-sorti.component';
import { GroupCompetenceComponent } from './admin/group-competence/group-competence.component';
import { ReferentielComponent } from './admin/referentiel/referentiel.component';
import { PromoComponent } from './admin/promo/promo.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { CompetenceComponent } from './admin/competence/competence.component';
import { UserCreateComponent } from './admin/users/user-create/user-create.component';
import { GrpcCreateComponent } from './admin/group-competence/grpc-create/grpc-create.component';
import { RefCreateComponent } from './admin/referentiel/ref-create/ref-create.component';
import { CompetenceCreateComponent } from './admin/competence/competence-create/competence-create.component';
import { InterceptorProvider } from 'src/_helpers/auth.interceptor';
import {PaginatorModule} from 'primeng/paginator';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import { UserDetailComponent } from './admin/users/user-detail/user-detail.component';
import { DetailProfilComponent } from './admin/profil/detail-profil/detail-profil.component';
import { UserEditComponent } from './admin/users/user-edit/user-edit.component';
import { ProfilEditComponent } from './admin/profil/profil-edit/profil-edit.component';
import { ListUsersDelComponent } from './admin/users/list-users-del/list-users-del.component';



@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingComponent,
    DashboardComponent,
    ProfilComponent,
    UsersComponent,
    ProfilSortiComponent,
    GroupCompetenceComponent,
    ReferentielComponent,
    PromoComponent,
    CompetenceComponent,
    UserCreateComponent,
    GrpcCreateComponent,
    RefCreateComponent,
    CompetenceCreateComponent,
    UserDetailComponent,
    DetailProfilComponent,
    UserEditComponent,
    ProfilEditComponent,
    ListUsersDelComponent
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ScrollToModule.forRoot(),
    PaginatorModule,
    NgbPaginationModule, NgbAlertModule
  ],
  providers: [InterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
