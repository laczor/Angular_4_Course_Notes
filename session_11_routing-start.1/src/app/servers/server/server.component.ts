// 1. Specifying the routing in app.module to load the serverComponent
// 2. import ActivatedRoute + inject it,
// 3. With using services, pass the id parameter from the url, with route.snapshot.param['idName], then subscribe to it, with an observable, change the states of the component.
// 4. this.route.snapshot.params['id']   =    '1'    a string value
// 4.1 +this.route.snapshot.params['id']   =    1    a number, so with a + we can convert the string to number.


import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import {ActivatedRoute, Params,Router,Data } from '@angular/router';

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
// So here what is happening, when the URL is passed with the routing, at the path level, the resolver function is called, which will get the server data, using the passed param id
// so the only thing what we have to do, is to continously check the the data for updates, and change the property of this server.
    this.route.data.subscribe(
      (data:Data)=>
      this.server = data['server']
      );
      
    // const id= +this.route.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);
    // this.route.params.subscribe(
    //   (params:Params) => {
    //     this.server = this.serversService.getServer(+params['id']);
      
    //   }
      // );
  }
  
  onEdit(){
    // this.router.navigate(['servers/',this.server.id,'edit']);
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling :'preserve'});
    // this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling :'merge'});
    
  }

}
