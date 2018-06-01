import { Component } from "@angular/core";
import { PROFILES } from "./profiles";
import { USERS } from "./users";
import { UsersService } from "./users.service";
import { Http } from "@angular/http";
import { environment } from "../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "NYC Employee Promotions Records Finder";
  isActive = false;
  users: any;
  activeLink() {
    this.isActive = !this.isActive;
  }

  constructor(private usersService: UsersService, private http: Http) {}
  ngOnInit() {
    this.http
      .get(`${environment.apiHost}/api/users`)
      .toPromise()
      .then(response => (this.users = response.json()));
    // this.usersService.getUsersList(this.users.bind(this));
  }
}
