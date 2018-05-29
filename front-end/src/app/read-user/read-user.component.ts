import { Component, OnInit } from '@angular/core';
import { USERS } from '../users';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-read-user',
  templateUrl: './read-user.component.html',
  styleUrls: ['./read-user.component.css']
})
export class ReadUserComponent implements OnInit {

  user: any;
  constructor(private route: ActivatedRoute) { }

  deleteUser(id) {
    // this.http.delete('/api/users/' + id)
    //   .toPromise()
    //   .then(response => console.log("user: " + id + " has been deleted"));
  }

  ngOnInit() {
    this.route.params.forEach(param => {
      if (param.id) {
        this.user = USERS[param.id - 1];
      }
    });
  }

}
