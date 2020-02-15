import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AgmCoreModule} from '@agm/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import {MaterialModule} from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DatePipe} from '@angular/common';

import { FormGroup, FormControl, ReactiveFormsModule} from '@angular/forms';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { UserheaderComponent } from './Components/userheader/userheader.component';
import { DespreexpComponent } from './Components/despreexp/despreexp.component';
import { ExperimentsComponent } from './Components/experiments/experiments.component';
import { AddExperimentComponent } from './Components/add-experiment/add-experiment.component';
import { LoginComponent } from './Components/login/login.component';
import {AdminComponent} from './Components/admin/admin.component';
import {AdminheaderComponent} from './Components/adminheader/adminheader.component';
import {TourComponent} from './Components/tour/tour.component';
import {AddgroupComponent} from './Components/addgroup/addgroup.component';
import {AdminexperimentsComponent} from './Components/adminexperiments/adminexperiments.component';
import {UpdateExperimentComponent} from './Components/update-experiment/update-experiment.component';
import {UploadComponent} from './Components/upload/upload.component';

//Services
import {AuthenticationService} from './authentication.service';
import {AuthInterceptor} from './AuthInterceptor';
import {CanActivateAuthGuard} from './can-activate.authguard'; 

import {ExperimentService} from './Services/Experiment.service';
import {AppuserService} from './Services/appuser.service';
import {EmployerUserService} from './Services/EmployerUser.service';
import {PrincipalService} from './Services/principal.service';
import {GroupService} from './Services/Group.service';

import {ImageUploadService} from './Services/imageupload.service';



const appRoutes :Routes = [
  {path:'', pathMatch:'full', redirectTo:'home'},
  {path:'home', component: HomeComponent},
  {path:'userheader', component: UserheaderComponent},
  {path:'despreexp', component: DespreexpComponent},
  {path:'experiments', component: ExperimentsComponent},
  {path:'experiments/new', component: AddExperimentComponent},
  {path:'login', component:LoginComponent},
  {path:'admin', component:AdminComponent},
  {path:'tour', component:TourComponent},
  {path:'groups/new', component:AddgroupComponent},
  {path:'admin/experiments', component:AdminexperimentsComponent},
  {path:'updateExperiment', component:UpdateExperimentComponent},
  {path:'upload', component:UploadComponent},
  
    
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserheaderComponent,
    DespreexpComponent,
    ExperimentsComponent,
    AddExperimentComponent,
    LoginComponent,
    AdminComponent,
    AdminheaderComponent,
    TourComponent,
    AddgroupComponent,
    AdminexperimentsComponent,
    UpdateExperimentComponent,
    UploadComponent
    
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBRMxv1DmYJoySlul4dmJJG43Of6DGP6JA'
    }),
    AppRoutingModule
  ],
  providers: [PrincipalService,AppuserService,AuthenticationService,CanActivateAuthGuard,ExperimentService,EmployerUserService,GroupService,ImageUploadService,DatePipe,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
