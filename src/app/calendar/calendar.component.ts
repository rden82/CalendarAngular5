import { Component, OnInit } from '@angular/core';
import {MonthComponent} from '../month/month.component';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})

export class CalendarComponent implements OnInit {

  constructor(public monthComponent: MonthComponent) {
  }
  ngOnInit() {
  }
  change(_step): Observable<void> {
    return of (this.monthComponent.getMonth(_step));
  }
}
