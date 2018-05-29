import { Component, OnInit } from '@angular/core';
import { PROFILES } from '../profiles';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  paramid: any;
  profile: any;
  profileName: String;
  bio: String;
  constructor(private route: ActivatedRoute, private http: Http) { }

  updateProfile(profileName, bio) {
    console.log(profileName);
    console.log(bio);
    this.http.patch(
      '/api/profiles/' + this.profile.id,
      {
        "profileName": profileName,
        "bio": bio
      }
    ).toPromise()
      .then(response => console.log(response.json().profileName + " has been updated."))
  }

  ngOnInit() {

    this.route.params.forEach(param => {
      if (param.id) {
        this.paramid = param.id;
      }
    });
    this.http.get('/api/profiles/' + this.paramid)
      .toPromise()
      .then(response => {

        this.profile = response.json();
        console.log(this.profile);
      });


  }

}


