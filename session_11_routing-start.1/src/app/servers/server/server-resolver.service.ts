// 1. What we are here using, is the built in resolve function of the routes defined in the routing.ts file path section
// 2. IMporting Resolve, to use the resolve function, Observable, sice the output can be observable as well, + Promise
// 3. Since we are using another service, we have to use injectable, to use  other service
// 4. interface server, is responsible, to create the type structure of the the resolve method the function has to return a server object 
// with {id: number;name: string; status: string;}, so instead of insertning it to everywhere,we can force the component, to have a server defined ojbect
// 5. +route.params['id'] will convert string '1' to number 1, so the serverService ts file, can fetch the server data
// 6. Add it to the app.module.ts as a service

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { ServersService } from '../servers.service';

interface Server {
  id: number;
  name: string;
  status: string;
}

@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private serversService: ServersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
    return this.serversService.getServer(+route.params['id']);
  }
}
