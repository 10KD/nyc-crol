import { Component, OnInit } from '@angular/core';
import { USERS } from '../users';
// import { UsersService } from '../users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users = USERS;

  // constructor(private usersService: UsersService) { }
  constructor() { }

  ngOnInit() {
    console.log(this.users);
    
    // this.usersService.getUsersList(this.users)
  }

}
