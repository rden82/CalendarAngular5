import {Component, OnInit, ViewChild} from '@angular/core';
import {MonthComponent} from '../month/month.component';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {CalendarService} from '../calendar.service';
import {YearComponent} from '../year/year.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {
  @ViewChild(MonthComponent)
  private monthComponent: MonthComponent;
  @ViewChild(YearComponent)
  private yearComponent: YearComponent;
  flag: boolean;
  nameDate: String;
  constructor(public calendarService: CalendarService) {
    this.flag = this.calendarService.getFlag();
    this.nameDate = this.calendarService.nameDate;
  }
  ngOnInit() {
  }
  change(_step) {
    if (this.flag) {
      this.monthComponent.getMonth(_step);
      this.calendarService.getNameMonth();
      this.nameDate = this.calendarService.nameDate;
    } else {
      this.yearComponent.getYear(_step);
      this.calendarService.getNameMonth();
      this.nameDate = this.calendarService.nameDate;
    }
 }
  changeYear(): void {
    this.calendarService.changeFlag();
    this.flag = this.calendarService.getFlag();
  }
}
