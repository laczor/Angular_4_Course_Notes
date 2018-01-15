// 1.counterUserServices has been imported + injectebla importe + inlcuded in the appmodule (imported + provider)
// 2. Added to the component with constructor, (due to  injectable + app.module provider, instance has been creatd at app level)
// 3. use, the properties / methods of the newly injected services in the oter service


import { countUsersServices} from './user_counter.services';
import {Injectable,EventEmitter} from '@angular/core';

@Injectable()
export class Users{
  // array of users
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
// Adding event emitting for the activation/deactivation event
userSetToActive = new EventEmitter<number>();
userSetToInactive = new EventEmitter<number>();

  constructor(private countUsers: countUsersServices){}
  
 onSetToInactive(id: number) {
  // if(this.activeUsers.length = 1){
  //   alert("1 user has to be active");
  // } else {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countUsers.activation(1);
  // }

  }

  onSetToActive(id: number) {
      this.activeUsers.push(this.inactiveUsers[id]);
      this.inactiveUsers.splice(id, 1);
      this.countUsers.deactivation(1);

  }
}