import { Component } from '@angular/core';
import { Employee } from "../models/employee.models";
import { FormPoster } from "../services/form-poster.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages: string[];
  model = new Employee('', '', false, '', 'default');
  hasPrimaryLanguageError: boolean = false; 

  constructor(private formPoster: FormPoster) {
    this.formPoster.getLanguages()
      .subscribe(
        data => this.languages = data.languages, 
        err => console.log('get error', err)
      )
  }

  submitForm(form: NgForm) {
    this.validatePrimaryLanguage(this.model.primaryLanguage) ; 
    if (this.hasPrimaryLanguageError) {
      return; 
    }
    this.formPoster.postEmployeeForm(this.model)
      .subscribe(
        data => console.log("Success: ", data), 
        err => console.log("Error: ", err)
      ); 
  }

  validatePrimaryLanguage(value) {
    if (value === 'default') {
      this.hasPrimaryLanguageError = true; 
    } else {
      this.hasPrimaryLanguageError = false; 
    }
    
  }
}
