// 1. Importing Activated Route, since it has the snapshot.params property, which will tell us the used parameters. + injecting it
// 2. defining an empty user object, which properties id,name will be changed with the passed parameters from the URL, the with string interpolation, the properties of the component will be displayed.
// 3. Since the parameters might change, (asycn code), we can listen to the parameters change by subscribing to it with this.route.params.subscribe, and adding a callback function, to it
// so when it changes, it will pass the recieved parameters as arguments, and will update the properties of the components wiht the recieved parameters


import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id:   this.route.snapshot.params['id'],
      name:  this.route.snapshot.params['name'],
    };
    
    this.route.params.subscribe(
      (params:Params) => {
          this.user.id = params['id'];
          this.user.name = params['name'];
      
      }
      );
  }

}
