import { Component } from '@angular/core';
import { PROFILES } from './profiles';
import { USERS } from './users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NYC Employee Promotions Records Finder';
  profiles = PROFILES;
  users = USERS;
}
