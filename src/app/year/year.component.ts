import { Component, OnInit } from '@angular/core';
import {CalendarService} from '../calendar.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {

  constructor(public calendarService: CalendarService) { }

  ngOnInit() {
    this.getYear(0);
  }
  getYear(step): void {

  }
}
