import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { environment } from "../../environments/environment";
import { RECORDS } from "../records";

@Component({
  selector: "app-list-favorites",
  templateUrl: "./list-favorites.component.html",
  styleUrls: ["./list-favorites.component.css"]
})
export class ListFavoritesComponent implements OnInit {
  favorites: any;
  records = RECORDS;

  constructor(private http: Http) {}

  parse(record) {
    let splitDescription = record.split(";");
    return splitDescription;
  }

  ngOnInit() {
    this.http
      .get(`${environment.apiHost}/api/favorites`)
      .toPromise()
      .then(response => (this.favorites = response.json()));
  }
}
