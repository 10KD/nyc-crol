import { Component, OnInit } from '@angular/core';
import { USERS } from '../users';
import { UsersService } from '../users.service';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: any;

  constructor(private usersService: UsersService, private http: Http) { }
  // constructor() { }

  ngOnInit() {
    this.http.get(`${environment.apiHost}/api/users`)
      .toPromise()
      .then(response => this.users = response.json());
    // this.usersService.getUsersList(this.users.bind(this));
  }

}
