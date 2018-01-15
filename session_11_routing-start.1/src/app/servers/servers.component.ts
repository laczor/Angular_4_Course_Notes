// 1. Importing ROuter+ ActivatedRouter, router is for, the navigate function, ActiavtedRotuer, is to tell angualar, a lot of metadata of the current component router data
// 2. using router.navigate relativeTo parameter, by parsing the current root to it
// 3. From now on the root url here is the component current url


import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private serversService: ServersService,
    private router:Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }


  onReload(){
    this.router.navigate(['/servers'], {relativeTo: this.route});
    
  }
}
