import { Component,OnInit } from '@angular/core';
import {AccountsService } from './accounts.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [AccountsService]
})
export class AppComponent implements OnInit {
  
// 1. importing AccountService + include in the provider
// 2. define the accounts property of the component, which is an array of defined ojbects
// 3. In the constructor, import the the created service file
// 4. THen assign te accounts array of the service to the defined accounts property of the commponent
  accounts: {name: string,status:string}[] = [];
  constructor(private accountsService : AccountsService){}
  
  ngOnInit(){
    this.accounts = this.accountsService.accounts;
    
  }
// All of the below code, is for storing the data/methods which is now used by an accountservice. 
  // accounts = [
  //   {
  //     name: 'Master Account',
  //     status: 'active'
  //   },
  //   {
  //     name: 'Testaccount',
  //     status: 'inactive'
  //   },
  //   {
  //     name: 'Hidden Account',
  //     status: 'unknown'
  //   }
  // ];

  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   this.accounts.push(newAccount);
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
}
