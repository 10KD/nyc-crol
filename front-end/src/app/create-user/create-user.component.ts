import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from 'src/app/types/user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  userName: String;
  firstName: String;
  lastName: String;
  // user: User;

  constructor(private usersService: UsersService) { }
  // constructor() { }

  createUser(userName, firstName, lastName) {
    this.usersService.createUser(userName, firstName, lastName);
  }

  ngOnInit() {
  }

}
