import { Component, OnInit } from '@angular/core';
import { CandidateDetailsService } from '../candidate-details.service';
export interface Skill {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-config-notification',
  templateUrl: './config-notification.component.html',
  styleUrls: ['./config-notification.component.css']
})
export class ConfigNotificationComponent implements OnInit {
  skills:string;
  target:string;
  constructor(private candidateService: CandidateDetailsService) { }

  ngOnInit() {
  }
  onAddSkills(){
    this.candidateService.skills = this.skills
    
    
  }
  onSendToTarget(){
    this.candidateService.targets = this.target

  }
  sendNotification(){
    this.candidateService.sendNotification();
  }
}
