import { Component, OnInit } from '@angular/core';
import { USERS } from '../users';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { environment } from '../../environments/environment';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent implements OnInit {
  paramid: any;
  user: any;
  constructor(private route: ActivatedRoute, private http: Http, private usersService: UsersService) { }

  deleteUser(id) {
    // this.usersService.deleteUser(id);
    this.http.delete(`${environment.apiHost}/api/users/` + id)
      .toPromise()
      .then(response => console.log("user: " + id + " has been deleted"));
  }

  ngOnInit() {
    // this.route.params.forEach(param => {
    //   if (param.id) {
    //     this.user = USERS[param.id - 1];
    //   }
    // });
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

}
