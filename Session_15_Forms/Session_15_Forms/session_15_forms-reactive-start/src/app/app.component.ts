import { Component,OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators,FormArray} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsernames = ['Chris','Anna'];
  
  ngOnInit(){
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
      'username': new FormControl(null, [Validators.required,this.forbiddenNames.bind(this)]),
      //since we are calling the FormControl with the new keyword, this is reffering to the fomrControl, but if we bind it ot the 'this, we can refere to the component'
      // FormControl(default value, validators, async Validators)
      'email': new FormControl(null,[Validators.required,Validators.email],this.forbiddenEmails.bind(this)),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    this.signupForm.valueChanges.subscribe(
      (value)=>{console.log(value)}
      );
    // this.signupForm.statusChanges.subscribe(
    //   (value)=>console.log(value)
    //   );
    this.signupForm.setValue({
      'userData': {
        'username': 'Max',
        'email': 'max@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    this.signupForm.patchValue({
      'userData': {
        'username': 'Anna',
      }
    });
  }
  onSubmit(){
  console.log(this.signupForm);    
  }
  
  onAddHobby(){  
    const control = new FormControl(null, Validators.required);                //The users creates the hobby
    (<FormArray> this.signupForm.get('hobbies')).push(control);                      // with (<FormArray>) we have to tell angular that this is an array of controls named as hobbies
  }
  
  //Custom validator is just a function
  // We want to recieve a FormControl object and output an object we key value pairs, which value should be a boolean
  
    forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
  
  //Takes the control as an argument, it will be a promise or an observable, which wraps anything,will handle async data
  // We are wrapping the setTimeout in a promise, which will resolve an object {} or a null if the functions is successfully executed
   forbiddenEmails(control: FormControl):Promise<any> | Observable<any>{
     const promise = new Promise<any>((resolve,reject)=>{
       setTimeout(()=>{
         if(control.value === "test@test.com"){
           resolve({ 'emailIsForbidden':true})
         } else{
           resolve(null)
         }
       },1500)
     });
     return promise
   }
} 
