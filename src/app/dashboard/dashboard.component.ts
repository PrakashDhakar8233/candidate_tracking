import { Component, OnInit } from '@angular/core';
import { CandidateDetailsService } from '../candidate-details.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
userID: string
  constructor(private candidateService:CandidateDetailsService) { }

  ngOnInit() {
    // this.userID = this.candidateService.userID
  }
 

}
