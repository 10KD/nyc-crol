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
  deleteFromFavorites(fav) {
    console.log(fav);

    for (let index = 0; index < this.favorites.length; index++) {
      const favorite = this.favorites[index];

      if (fav == favorite) {
        this.favorites.splice(index, 1);
        console.log(
          "favorite: " + favorite.id + " has been deleted from frontend"
        );
        console.log(this.favorites);
      }
    }
  }

  deleteFavorite(record) {
    console.log(record);
    this.http
      .delete(`${environment.apiHost}/api/favorites/` + record.id)
      .toPromise()
      .then(response => {
        console.log(
          "favorite: " + record.id + " has been deleted from backend"
        );
        this.deleteFromFavorites(record);
      });
  }

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
