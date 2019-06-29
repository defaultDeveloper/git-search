import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private profileservice: ProfileService) { }
  uname: any;
  userData: any;
  repo: any;
  show = true;

  ngOnInit() { }

  search() {
    this.profileservice.getUserDetails(this.uname).subscribe(data => {
      this.userData = data;
      console.log(data);
    });
    this.profileservice.getRepoDetails(this.uname).subscribe(data => {
      this.repo = data;
      console.log(this.repo);
    });
    if (this.userData.bio === null) {
      this.show = false;
    }
  }



}
