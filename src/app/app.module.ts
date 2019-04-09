import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { ViewCandidateComponent } from './view-candidate/view-candidate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConfigNotificationComponent } from './config-notification/config-notification.component';
import { DropdownDirective } from './dropdown.directive';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule,MatNativeDateModule, MatFormFieldModule, MatInputModule, matFormFieldAnimations} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NotificationComponent } from './notification/notification.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";


import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CandidateDetailsComponent,
    ViewCandidateComponent,
    DashboardComponent,
    ConfigNotificationComponent,
    DropdownDirective,
    NotificationComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
    
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
