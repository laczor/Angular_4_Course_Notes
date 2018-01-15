import { Component } from '@angular/core';
import { LoggingService } from '../logging.services';
import { AccountsService } from '../accounts.services';
@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  // 1. import the exported typescript class of LoggingService, include it in the component providers
  // 2. inject it into the component's constructor, so it will know how to build up the coponents
  // 3. use the property of this component as accountsService, and access each methods and property of it.
  // 4. We are only injecting the service, not creating an instance of it, since it is inherited from app.component
 //  xxx LoggingService Not needed, since the loggingService has been injected to the accountsService
 
  constructor (
  private loggingService: LoggingService,
  private accountsService: AccountsService)
    {
      this.accountsService.statusUpdated.subscribe(
    (status: string) => console.log("Emitted then recieved status is : "+status)
    )}
  
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  
  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
  // });
    this.accountsService.addAccount(accountName,accountStatus);
    // this.loggingService.logStatusChange(accountStatus);      

  }

}
