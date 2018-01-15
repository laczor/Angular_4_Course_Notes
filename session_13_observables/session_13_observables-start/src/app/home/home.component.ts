// 1. Basically, we are importing the Observalbe + the Rx package, so we can create observalbes
// 2. Observables, are basically a information or information package, which can be emitted, failed, complteded, any assychron totally
// 3. We are setting a constant to be an observable, and emitting it's value, 1 second, then whe are subscribeing to this observable, so we can executed some code when we are recieving the data
// 4. easy to see and implement usage, of sharing data.
// 
// 


import { Component, OnInit,OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subscription } from 'rxjs/Subscription';

import 'rxjs/Rx';                         // To work with observable operators.
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
// numbersObsSubscription : Subscription;
 myObservableObsSubscription : Subscription;
 
  constructor() { }

  ngOnInit() {
// ******Lecture 159 ******
    // const mynumbers = Observable.interval(1000);
    // mynumbers.subscribe(
    //   (number: number)=>{               //when observable emits data
    //     console.log(number);
    //   }   
      
      // ()=>{}           when observable fails
      // ()=>{}           when observable completes
      
      // );
 // ******Lecture 160 ******     
 // 1. We are manually creating an osbervable, with observer functions. So what we define, is that we have a datapackage, what we would like to send, then we are determining
//  in the observer methods, in which way, and what sould be emited, also what will be the type of the emitted data package,
// 2. So when we are subscribing to the observable, we will know, how to handle if the emitting (Provides data/ Fail/ completes)
    const myObservable = Observable.create( (observer: Observer<string>)=>{
        setTimeout(()=>{
          observer.next('First package');
        },2000);      
        setTimeout(()=>{
          observer.next('Second package');
        },4000);      
        setTimeout(()=>{
          observer.error('error has been occured');
        },5000);
        setTimeout(()=>{
          observer.complete();
        },7000);
        setTimeout(()=>{
          observer.next('Last package');
        },8000);
    });
  this.myObservableObsSubscription = myObservable.subscribe(
    (data:string)=>{console.log(data);},                                    //1. data recieved
    (error:string)=>{console.log(error);},                                  //2. Error occured
    ()=>{console.log('completed argument reache for the observable');}      //3. observer completed
    );


  }
// **** Lecture 161 UNSUBSCRIBE ****
// ---home.component.ts--
// 1. We are importing, and implementing ngOnDestroy, interfaces, lifecyclehook, so when the component is destroyed, we can executed some of the codes
// 2. Then importing subscription type as well, so we can create a custom property of the component, which will store our subscription, and when the component is destroyed
//  with the built in unbsubscribe method, we can quickly terminate it
// 3. Really, important, because it affects the memory capacity,performance, information leak.

    ngOnDestroy(){
      this.myObservableObsSubscription.unsubscribe();
    }
}
