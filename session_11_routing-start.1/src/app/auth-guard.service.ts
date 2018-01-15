// Actually, this service implements the CanActivate interface, which has the following requirement:
// 1. has to have a route, state argument whith the defined type
// 2. has to return a Observable,Promise,Boolan value
// 3. Since we are returning a promis with this code: this.authService.isAuthenticated(), it has the property of then
// But it is really important that is is returned, so an observable/promise/boolean value is returned
// 4. Then the recieved value from this code, will be evaluted, and
//  Either a boolean value will be returned, or  with router.navigation, we will move to a next page
// 5. Key dependecies, Authservice, which will return the value, has to be injectable, all of the argument types, implementation interface, has ti be imported as well
// Using the CanActivateChild to to implement it on the childrouts, also using the created canActivate method, with passing the required parameters, and returning the boolean value

import {
    CanActivate,
    CanActivateChild,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router
} from '@angular/router';

import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild {
    
    constructor ( private authService: AuthService,private router: Router){};
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
                Observable<boolean> | Promise<boolean> | boolean {
          return this.authService.isAuthenticated()
             .then(
               (authenticated: boolean) => {
                 if (authenticated) {
                   return true;
                 } else {
                   this.router.navigate(['/']); // takes you to the root page.
                   return false;
                 }
               }
             );
           }
    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
                Observable<boolean> | Promise<boolean> | boolean {
                    return this.canActivate(route,state);
            }
    
}