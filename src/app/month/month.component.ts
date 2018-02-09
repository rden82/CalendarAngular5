import {Component, OnInit} from '@angular/core';
import {CalendarService} from '../calendar.service';
import {Day} from '../day';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent implements OnInit {
  nameDate: string;
  nameMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  templateWeek = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Cб', 'Вс'];
  month: Day[];
  constructor(public calendarService: CalendarService) {
  }

  ngOnInit() {
    this.getMonth(0);
  }
  getMonth(step): void {
    this.calendarService.TempDate = new Date(this.calendarService.TempYear, this.calendarService.TempMonth + step, 1);
    this.calendarService.TempYear = this.calendarService.TempDate.getFullYear();
    this.calendarService.TempMonth = this.calendarService.TempDate.getMonth();
    this.calendarService.getMonth(this.calendarService.TempYear, this.calendarService.TempMonth).subscribe(month => this.month = month);
    this.calendarService.nameDate = this.nameMonths[this.calendarService.TempMonth] + ' ' + this.calendarService.TempYear;
  }

}
