import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

//Components
import { HomeComponent } from './Components/home/home.component';
import { UserheaderComponent } from './Components/userheader/userheader.component';
import { DespreexpComponent } from './Components/despreexp/despreexp.component';
import { ExperimentsComponent } from './Components/experiments/experiments.component';
import {AddExperimentComponent} from './Components/add-experiment/add-experiment.component';
import {LoginComponent} from './Components/login/login.component';
import {AdminComponent} from './Components/admin/admin.component';
import {TourComponent} from './Components/tour/tour.component';
import {AddgroupComponent} from './Components/addgroup/addgroup.component';
import {AdminexperimentsComponent} from './Components/adminexperiments/adminexperiments.component';
import {UpdateExperimentComponent} from './Components/update-experiment/update-experiment.component';
import {UploadComponent} from './Components/upload/upload.component';

const routes: Routes = [
    {path:'', pathMatch:'full', redirectTo:'home'},
    {path: 'home', component: HomeComponent},
    {path: 'userheader', component: UserheaderComponent },
    {path: 'despreexp', component:DespreexpComponent},
    {path: 'experiments', component:ExperimentsComponent},
    {path:'experiments/new', component: AddExperimentComponent},
    {path:'login', component:LoginComponent},
    {path:'admin', component:AdminComponent},
    {path:'tour', component:TourComponent},
    {path:'groups/new', component:AddgroupComponent},
    {path:'admin/experiments', component:AdminexperimentsComponent},
    {path:'experiments/updateExperiment/:id', component:UpdateExperimentComponent},
    {path:'upload', component:UploadComponent},

];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}

