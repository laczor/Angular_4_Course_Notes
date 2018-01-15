 
// 1. IMport the router + inject it
// 2. Using navigate function of the router, and pass the url, as an element of an array, not with string type []
// 

import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router,
              private authService: AuthService) { }

  ngOnInit() {
  }
// IMportant: [URL] is an array of different properties, queryParams,fragment is an insertable javascript object, with assignable properties
  onLoadServers(id:number){
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: '1'}, fragment:'loading'});
  }
  onLogin(){
    this.authService.login();
  }
  onLogout(){
    this.authService.logout();
    
  }

}
