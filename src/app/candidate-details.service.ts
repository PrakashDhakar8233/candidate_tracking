import { Injectable } from '@angular/core';
import { Candidate } from './candidate-details/candidate.model';
import { Notifiy } from './notification.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateDetailsService {
  userID: string
 candidateDetails: Candidate[] = [
  
 ]
 targets:string;
 skills:string;
 logedInuser:string;
 recivedSkills:any[]=[];
 date:string
 

  constructor(private http: HttpClient) { }
  SubmitDetails(values:Candidate){
    this.candidateDetails.push(values);
    console.log(this.candidateDetails,'jjjjj');
    
  }
  
  getDetails(){
    return this.candidateDetails;
    console.log('hhhh');
  }
  pushTarget(target:string){
    this.targets=target;
    // console.log(this.targets,'target');
    
  }
  pushSkill(skill: string){
    this.skills=skill;
    // console.log(this.skills,'skills');

    
  }
  loginUser(user:string){
    this.logedInuser=user;
    // console.log(this.user,'user');

  }
  sendSkills(skills, date){
    this.recivedSkills= skills;
    this.date = date

  }
  sendNotification(){
    // console.log('jiii');
   
 const notificationData: Notifiy={logedInuser: this.logedInuser,skills: this.skills,targets: this.targets}
 return this.http.post<Notifiy>("http://localhost:3000/api/notifications",notificationData)
  }
  getNotification(){
    return this.http.get("http://localhost:3000/api/notifications")
  //  .subscribe(res=>{
  //    console.log(res,'kk')
  //  })
  }
}
