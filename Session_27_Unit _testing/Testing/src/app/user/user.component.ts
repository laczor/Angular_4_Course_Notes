import { Component, OnInit } from '@angular/core';

import { UserService } from "./user.service";       // It is just returning a property name
import { DataService } from "../shared/data.service";   //Will provide an async promise with the "Data" string

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService, DataService]
})
export class UserComponent implements OnInit {
  user: {name: string};
  isLoggedIn = false;
  data: string;

  constructor(private userService: UserService, private dataService: DataService) { }

//IT will update the username with the property
//Wait for the async service and change the data component's variable for databinding
  ngOnInit() {
    this.user = this.userService.user;
    this.dataService.getDetails().then((data: string) => this.data = data);
  }

}
