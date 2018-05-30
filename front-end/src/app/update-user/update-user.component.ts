import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { USERS } from '../users';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  user: any;
  paramid: any;
  userName: String;
  firstName: String;
  lastName: String;
  constructor(private route: ActivatedRoute, private http: Http) { }

  updateUser(userName, firstName, lastName) {
    this.http.patch(
      `${environment.apiHost}/api/users/` + this.user.id,
      {
        "userName": userName,
        "firstName": firstName,
        "lastName": lastName
      }
    ).toPromise()
      .then(response => console.log(response.json().userName + " has been updated."))
  }

  ngOnInit() {
    this.route.params.forEach(param => {
      if (param.id) {
        this.paramid = param.id;
      }
    });
    this.http.get(`${environment.apiHost}/api/users/` + this.paramid)
      .toPromise()
      .then(response => {
        this.user = response.json();
        console.log(this.user);
      }); 

}
