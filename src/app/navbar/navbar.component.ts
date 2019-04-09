import { Component, OnInit } from '@angular/core';
import { CandidateDetailsService } from '../candidate-details.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userId

  constructor(private canService:CandidateDetailsService) { }

  ngOnInit() {
    this.userId=this.canService.userID;
  }
  onLogOut(){
    this.canService.userID= null;
  }

}
