import { Component
// EventEmitter,
// Input,
// Output
} from '@angular/core';
import{ Users } from '../users.services';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent {
 users: string[];
 
  // @Input() users: string[];
  // @Output() userSetToInactive = new EventEmitter<number>();

  constructor (private userServices: Users){
    this.users = this.userServices.activeUsers;
  }
  
  onSetToInactive(id: number) {
    // this.userSetToInactive.emit(id);
    this.userServices.onSetToActive(id);
    
  }
}
