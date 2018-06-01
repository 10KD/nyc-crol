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
  constructor(private http: Http, private route: ActivatedRoute) {}
  parse(record) {
    let splitDescription = record.additional_description_1.split(";");
    return splitDescription;
  }

  createFavorite(favoriteInfo, categoryId, userId) {
    this.http
      .post(`${environment.apiHost}/api/favorites`, {
        favoriteInfo: favoriteInfo,
        categoryId: categoryId,
        userId: userId
      })
      .toPromise()
      .then(response =>
        console.log(response.json().favoriteInfo + " -- has been favorited")
      );
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
  }
}
