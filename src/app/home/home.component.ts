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

}
