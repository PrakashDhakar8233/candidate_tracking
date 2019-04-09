import { Component, OnInit } from '@angular/core';
import { CandidateDetailsService } from '../candidate-details.service';
import { Candidate } from '../candidate-details/candidate.model';

@Component({
  selector: 'app-view-candidate',
  templateUrl: './view-candidate.component.html',
  styleUrls: ['./view-candidate.component.css']
})
export class ViewCandidateComponent implements OnInit {
  fetchedCandidate:Candidate[];
  fetchedSkills:any[];
  // date:string

  constructor(private candidateService1:CandidateDetailsService) { }

  ngOnInit() {
  this.fetchedCandidate = this.candidateService1.getDetails()
console.log(this.fetchedCandidate,'lll');
this.fetchedSkills= this.candidateService1.recivedSkills;
// console.log(this.fetchedSkills,'ho gaya');

// this.date = this.candidateService1.date
// console.log(this.date);



  }
  


}
