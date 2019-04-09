import { Component, OnInit } from '@angular/core';
import { CandidateDetailsService } from '../candidate-details.service';
import { Notifiy } from '../notification.model';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private candidateService: CandidateDetailsService) { }
 user:string
 skills:string
 target:string
 select:boolean = false
  ngOnInit() {
    this.user = this.candidateService.userID
   this.candidateService.sendNotification()
   .subscribe(result=>{
     console.log(result);
     
    if(this.user==result.targets){
      this.skills = result.skills;
      this.target = result.logedInuser;
    }
   })
    
  }

  onSelect(i){
    this.select = true;
    console.log(i,"skdlks")
  }
 
  


}
