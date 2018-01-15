// 1. import all the users + constructor (no providers include due to have only 1 instance
// 2.)


import { 
  Component 
  // EventEmitter, 
  // Input, 
  // Output
  } from '@angular/core';
import{ Users } from '../users.services';


@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  // @Input() users: string[];
  // @Output() userSetToActive = new EventEmitter<number>();
  users: string[];
  
  constructor (private userServices: Users){
    this.users = this.userServices.inactiveUsers;
  }
      
      
  onSetToActive(id: number) {
    // this.userSetToActive.emit(id);
    this.userServices.onSetToInactive(id);
  }
}
