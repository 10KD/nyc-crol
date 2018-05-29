import { Component, OnInit } from '@angular/core';
import { RECORDS } from '../records';

@Component({
  selector: 'app-nyc-records',
  templateUrl: './nyc-records.component.html',
  styleUrls: ['./nyc-records.component.css']
})
export class NycRecordsComponent implements OnInit {
  records = RECORDS;
  constructor() { }

  ngOnInit() {
  }

}
