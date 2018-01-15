// 1. Adding an interface, to this custom created class, which will force use to have a canDeactivate class, which will return a Observable,Promiise, Boolean
// 2. Writing the candeactivate function

import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute,Params,Router } from '@angular/router';
import { CanComponentDeactivate} from './can-deactivate-guard.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe(
      (queryParams:Params)=>{
       this.allowEdit = queryParams['allowEdit'] === '1' ? true : false ; 
      });  // + addding some callback as we have done with the user.ts module
    
    this.server = this.serversService.getServer(+this.route.snapshot.params['id']);      // + is needed to convert string value from it this.route.snapshot.params['id']
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;    
    this.router.navigate(['../'], {relativeTo: this.route });
  }

// will return Observable,Promise,Boolean as the canComponenetDeactivated interfaces forces, check the properties for changes and returning a confrim options
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    console.log()
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}
