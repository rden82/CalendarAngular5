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
  constructor(public calendarService: CalendarService) {
    this.calendarService.getFlag().subscribe(flag => this.flag = flag);
  }
  ngOnInit() {
  }
  change(_step): Observable<void> {
    if (this.flag) {
      return of(this.monthComponent.getMonth(_step));
    } else {
      return of(this.yearComponent.getYear(_step));
    }
 }
  changeYear(): void {
    this.calendarService.changeFlag();
    this.calendarService.getFlag().subscribe(flag => this.flag = flag);
  }
}
