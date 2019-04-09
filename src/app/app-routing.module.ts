import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigNotificationComponent } from './config-notification/config-notification.component';
import { NotificationComponent } from './notification/notification.component';

const routes: Routes = [
  {path:'', component: LoginComponent, pathMatch: 'full'},
  {path:'dashboard', component:DashboardComponent},
  { path:'submit', component: CandidateDetailsComponent},
  { path:'view', component:ViewCandidateComponent},
  { path:'co-notifi', component:ConfigNotificationComponent},
  { path:'notification', component:NotificationComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
