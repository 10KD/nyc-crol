import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PROFILES } from '../profiles';
import { Http } from '@angular/http';


@Component({
  selector: 'app-read-profile',
  templateUrl: './read-profile.component.html',
  styleUrls: ['./read-profile.component.css']
})
export class ReadProfileComponent implements OnInit {
  id: Number;
  profile: any;
  constructor(private route: ActivatedRoute, private http: Http) { }
  
  deleteProfile(id){
    this.http.delete('/api/profiles/' + id)
    .toPromise()
    .then(response => console.log("profile: " + id + " has been deleted"));
  }
  paramid: Number;
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
