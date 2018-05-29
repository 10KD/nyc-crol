import { Component, OnInit } from '@angular/core';
import { PROFILES } from '../profiles';
import { Http } from '@angular/http';

@Component({
  selector: 'app-list-profiles',
  templateUrl: './list-profiles.component.html',
  styleUrls: ['./list-profiles.component.css']
})
export class ListProfilesComponent implements OnInit {
  profiles: any;
 

  constructor(private http: Http) { }

  ngOnInit() {
    this.http.get('/api/profiles')
      .toPromise()
      .then(response => this.profiles = response.json());
   
    
  }

}
