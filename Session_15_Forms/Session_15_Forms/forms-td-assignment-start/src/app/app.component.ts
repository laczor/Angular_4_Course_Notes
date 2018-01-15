import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @ViewChild('f') signupForm: NgForm;
  defaultSubscription = 'basic';
  user = {
    email: '',
    subscription: '',
    password: ''
  };
   submitted = false;

    onSubmit() {
    this.submitted = true;
    this.user.email = this.signupForm.value.email;
    this.user.subscription = this.signupForm.value.subscription;
    this.user.password = this.signupForm.value.password;
    this.signupForm.reset({
						    email: 'email has been resetted!',
						    subscription: 'pro',
						    password: 'password'
						  });
  }
}
