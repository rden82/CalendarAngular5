import { Component, OnInit } from '@angular/core';
import {CalendarService} from '../calendar.service';

@Component({
  selector: 'app-year',
  templateUrl: './year.component.html',
  styleUrls: ['./year.component.css']
})
export class YearComponent implements OnInit {
  nameMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
    'January', 'February', 'March', 'April'];

  constructor(public calendarService: CalendarService) { }

  ngOnInit() {
    this.getYear(0);
  }
  getYear(step): void {
    this.calendarService.TempDate = new Date(this.calendarService.TempYear  + step, this.calendarService.TempMonth, 1);
    this.calendarService.TempYear = this.calendarService.TempDate.getFullYear();
    this.calendarService.nameDate = ' ' + this.calendarService.TempYear;
  }
  changeYear(): void {

  }
}
