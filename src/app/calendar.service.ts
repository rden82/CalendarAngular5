import { Injectable } from '@angular/core';
import {Year} from './year';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {Day} from './day';

@Injectable()
export class CalendarService {
  year: Year = new Year();
  TempDate: Date = new Date();
  TempYear: number = this.TempDate.getFullYear();
  TempMonth: number = this.TempDate.getMonth();
  nameDate: String = 'test';
  flagDays = true;
  constructor() {}
  getMonth(_year, _month) {
    return this.year.getMonth(_year, _month);
  }
  getFlag() {
    return this.flagDays;
  }
  changeFlag(): void {
    this.flagDays = !this.flagDays;
  }
  getNameMonth() {
    this.nameDate = <String>(this.TempMonth + ' ' + this.TempYear);
  }
}
