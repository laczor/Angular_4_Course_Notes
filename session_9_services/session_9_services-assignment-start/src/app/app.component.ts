//  1. IMporting users, include it in the providers
// 2. Making a variable to store the array of names, array of strings 
// 3. Assigning with the consturctor, when the component is created the arrays stored in the services
import { Component } from '@angular/core';
import{ Users } from './users.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Users]
})
export class AppComponent {

  activeUsers: string [] = [];
  inactiveUsers: string [] = [];
  
// 
  constructor (private userServices: Users){
    this.activeUsers = this.userServices.inactiveUsers;
    this.inactiveUsers = this.userServices.activeUsers;
  }
  // activeUsers = ['Max', 'Anna'];
  // inactiveUsers = ['Chris', 'Manu'];

  // onSetToInactive(id: number) {
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }

  // onSetToActive(id: number) {
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }
}
