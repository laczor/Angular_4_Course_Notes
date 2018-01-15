// 1. Specifying the routing in app.module to load the serverComponent
// 2. import ActivatedRoute + inject it,
// 3. With using services, pass the id parameter from the url, with route.snapshot.param['idName], then subscribe to it, with an observable, change the states of the component.
// 4. this.route.snapshot.params['id']   =    '1'    a string value
// 4.1 +this.route.snapshot.params['id']   =    1    a number, so with a + we can convert the string to number.


import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import {ActivatedRoute, Params,Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }


  ngOnInit() {
    const id= +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe(
      (params:Params) => {
         this.server = this.serversService.getServer(+params['id']);
      
      }
      );
  }
  
  onEdit(){
    // this.router.navigate(['servers/',this.server.id,'edit']);
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling :'preserve'});
    // this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling :'merge'});
    
  }

}
