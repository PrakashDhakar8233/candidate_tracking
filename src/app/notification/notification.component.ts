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
 select:number
 recivedNotifi:Notification[]=[];
  ngOnInit() {
    this.user = this.candidateService.userID
   this.candidateService.getNotification()
   .subscribe(result=>{
     console.log(result);
     for(var i=0;i<100;i++){
      if(this.user==result[i].targets){
        
       this.recivedNotifi.push(result[i])

      }
     }
     console.log(this.recivedNotifi,'haan')
     
     

   })
    
  }

  onSelect(i){
    this.select = i;
    this.select = null;
  }

 
  


}
