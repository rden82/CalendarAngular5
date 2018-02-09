import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {CalendarService} from './calendar.service';
import { CalendarComponent } from './calendar/calendar.component';
import { MonthComponent } from './month/month.component';
import { YearComponent } from './year/year.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    MonthComponent,
    YearComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
