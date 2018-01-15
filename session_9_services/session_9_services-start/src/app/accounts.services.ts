// In order to inject 1 service to an other
// 0. Include in the providers in the app.module.ts (import service ts file as well)
// 1. import the services file
// 2. import injectable, and add decorator to the export class
// 3. Inject the service with the constructor
// 4. Since the other service has been injected to be the property of the loggingService, we can access all of it's method and properties



import { LoggingService } from './logging.services';
import {Injectable,EventEmitter} from '@angular/core';


@Injectable()
export class AccountsService {
  
  constructor(private loggingService:LoggingService){
    
  }
// we are adding an event emitter variable, to the account service, which can be triggered later, in ever childcomponent
  statusUpdated = new EventEmitter<string>();
    
     accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
// we are insterting a ojbect, which has name,status property with declared string type
  addAccount(name: string, status :string){
      this.accounts.push({name:name,status:status});
      this.loggingService.logStatusChange('new server has added' +status);
  }
  updateStatus(id:number,status:string){
      this.accounts[id].status = status;
      this.loggingService.logStatusChange(status);
      
  }
  
}