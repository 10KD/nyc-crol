import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { RECORDS } from "../records";
import { ActivatedRoute } from "@angular/router";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-nyc-records-list",
  templateUrl: "./nyc-records-list.component.html",
  styleUrls: ["./nyc-records-list.component.css"]
})
export class NycRecordsListComponent implements OnInit {
  recordCategory: any;
  recordCategoryNum: any;
  recordsList: any;
  parsedRecords: any;
  recordToDelete: any;
  favorites: any;
  constructor(private http: Http, private route: ActivatedRoute) {}
  parse(record) {
    let splitDescription = record.additional_description_1.split(";");
    return splitDescription;
  }

  inDb(record) {
    console.log(this.favorites);

    for (let index = 0; index < this.favorites.length; index++) {
      const favorite = this.favorites[index];
      if (record == favorite.favoriteInfo) {
        console.log("record found");
        this.recordToDelete = favorite;
        return true;
      }
    }

    console.log("record not found");
    return false;
  }

  createFavorite(favoriteInfo, categoryId, userId) {
    console.log("creating favorite: " + favoriteInfo);

    this.http
      .post(`${environment.apiHost}/api/favorites`, {
        favoriteInfo: favoriteInfo,
        categoryId: categoryId,
        userId: userId
      })
      .toPromise()
      .then(response => {
        console.log(response.json().favoriteInfo + " -- has been favorited");
        this.favorites.push(response.json());
        console.log(this.favorites);
      })
      .catch(err => {
        console.log(err.json());
      });
  }
  deleteFromFavorites(fav) {
    console.log(fav);

    for (let index = 0; index < this.favorites.length; index++) {
      const favorite = this.favorites[index];

      if (fav == favorite) {
        this.favorites.splice(index, 1);
        console.log("favorite: " + favorite.id + " has been deleted from frontend");
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

  ngOnInit() {
    this.route.params.forEach(param => {
      if (param.id) {
        this.recordCategory = RECORDS[param.id - 1];
      }
      this.recordCategoryNum = param.id;
    });
    this.http
      .get(this.recordCategory.url)
      .toPromise()
      .then(response => {
        this.recordsList = response.json();
        this.parsedRecords = this.recordsList.map(record => {
          return this.parse(record);
        });
      });

    this.http
      .get(`${environment.apiHost}/api/favorites`)
      .toPromise()
      .then(response => {
        this.favorites = response.json();
        console.log(this.favorites);
      });
  }
}
