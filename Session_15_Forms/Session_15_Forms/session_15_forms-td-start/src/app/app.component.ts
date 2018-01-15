import { Component,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;       //Will help us 
  defaultQuestion = 'pet';                  //Valid html tag "value"
  answer = '';                              //Storing the two way binding value
  genders = ['male','female'];               //Array to loop through the radio buttons
  suggestUserName() {
    const suggestedName = 'Superuser';
    
    // this.signupForm.setValue({
    //   userData:{
    //     username: suggestedName,
    //     email:''
    //   },
    //   secret:'pet',
    //   questionAnswer: '',
    //   gender:'male',
    //   })
    
    this.signupForm.form.patchValue({
      userData:{
        username: suggestedName
      }
    });
  }
  
  //Passing local reference as an argument
  // onSubmit(form: ngForm){
  //   console.log('form');   // will console log out the actual form object with all of the properties
  // }
  
   onSubmit(){
    console.log(this.signupForm);   // will console log out the actual form object with all of the properties
  }
}
