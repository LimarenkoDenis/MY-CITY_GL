import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Pro';
  person = {
    firstName: 'Bob'
  };
  email = 'email.test@test.com';
  @ViewChild('form') sgForm: NgForm;

  onSubmit(form) {
    console.log(form);
  }


  onChange(field) {
    console.log(field)
  }
}
