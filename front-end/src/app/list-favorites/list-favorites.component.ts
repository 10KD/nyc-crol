import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-list-favorites",
  templateUrl: "./list-favorites.component.html",
  styleUrls: ["./list-favorites.component.css"]
})
export class ListFavoritesComponent implements OnInit {
  favorites: any;

  constructor(private http: Http) {}

  ngOnInit() {
    this.http
      .get(`${environment.apiHost}/api/favorites`)
      .toPromise()
      .then(response => (this.favorites = response.json()));
  }
}
