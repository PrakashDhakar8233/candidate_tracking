import { Component, OnInit } from '@angular/core';
import { NgForm, } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Candidate } from './candidate.model';
import { CandidateDetailsService } from '../candidate-details.service';


@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {
  candidateDetails:Candidate[]=[];
  skills:any[]=[];
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  
  

  constructor(private candidateService:CandidateDetailsService,
              private router: Router) {}


  onSubmit(form:NgForm){
    // console.log(form.value)
    this.candidateService.SubmitDetails(form.value)

    this.router.navigate(['/view']);
    // this.candidateService.sendSkills();

    // this.formValue.splice(1,0,this.skills)
    
}

  ngOnInit() {}

      logCheckbox(element: HTMLInputElement){
      this.skills.push(element.value);
      this.date = this.serializedDate
      console.log(this.serializedDate,'date1');
      console.log(this.date,'date2');
      this.candidateService.sendSkills(this.skills, this.date)
      
      
      
    }

}
