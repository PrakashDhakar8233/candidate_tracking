import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './user.model';
import { CandidateDetailsService } from '../candidate-details.service';
import { from } from 'rxjs';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userValidate: boolean
  errorMessage:string
users:User[] = [
  {email:"admin@test.com", password:"admin"},
  {email:"admin1@test.com", password:"admin1"},
  {email:"user@test.com", password:"user"}

]
  constructor(private candidateService: CandidateDetailsService,
              private router: Router) { }
  onSubmit(form:NgForm){
    this.candidateService.loginUser(form.value.email)
this.users.forEach(element => {
  if(form.value.email==element.email){
    if(form.value.password==element.password){
      this.userValidate = true

    }else{this.errorMessage = "password is incorrect" }
  }else{ this.errorMessage = "id is incorrect"}
});  
this.candidateService.userID = (form.value.email)
this.router.navigate(['/dashboard'])
  }
  ngOnInit() {
  }

}
