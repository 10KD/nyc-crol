import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Profile } from 'src/types/profile';
import { environment } from '../../environments/environment'

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  
  profileName: String;
  bio: String;

  constructor(private http: Http) { }

  createProfile(profileName, bio) {
    this.http.post(
      '/api/profiles',
      {
        "profileName": profileName,
        "bio": bio
      }
    ).toPromise()
    .then(response => console.log(response.json().profileName + " has been created."))
  }

  ngOnInit() {
  }

}
