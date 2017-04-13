import { Component } from '@angular/core';

@Component({
  selector: 'HomeComponent',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  startDate: Date;
  minDate = new Date();
  startTime = new Date("Jan 1 2017 3:00 PM");
}
