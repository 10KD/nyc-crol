import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { USERS } from '../users';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: any;
  // paramid: any;
  // userName: String;
  // firstName: String;
  // lastName: String;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach(param => {
      if (param.id) {
        this.user = USERS[param.id - 1];
      }
    });
  }

}
