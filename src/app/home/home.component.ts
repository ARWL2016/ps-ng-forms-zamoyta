import { Component } from '@angular/core';
import { Employee } from "../models/employee.models";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages: string[] = ['English', 'Spanish', 'German', 'Other'];
  model = new Employee('', '', false, 'w2', 'English');

  firstNameToUpperCase(value: string): void {
    if (value.length > 0) {
      this.model.firstName = value.charAt(0).toUpperCase() + value.slice(1);
    } else {
      this.model.firstName = value;
    }
  }
}
