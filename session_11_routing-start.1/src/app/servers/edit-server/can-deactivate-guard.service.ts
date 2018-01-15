// So here we are creating an interface, which is a contract. Every class which implements it has to have a canDeactivate method which will return a Observable/promise/boolean, this is the only criteria
// next, we are creating a CanDeactiavedGuard, which is a class, which implements the canDeactivate generic interface, which defined type is our custom created interface
// The reason for it is to ensure, the if a component, is using the custom interface, (has a canDeactivate function, with the specific returning values), can use this guard.
// Can deactivate method, will take several arguments
// - component, is referring to the component where we are using it
// - currentRoute is the component's current route
// - CurrentState is the component's current url, queryparams,fragment etc.
// - nextState is an optional argument ?, with the next routerparameters.
// Lastly, we are calling the component's canDeactivate own function, where we are currently on.

//  In summary, canDeactiave is a built in angular interface, which can be called in the Routes path, have several arguments, will keeptrack if the user is trying to leave the current component
// if yes, it will know all of the details about the component, and will call the canDeactivate function of the component, and with our custom interface we are forcoing the injected component to have a candeactivate function
// our custom function is not mandatory, but good practice to force them to have, so the canDeactivate angular interface could work.
import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


//Every class which implements it has t o have a canDeactivate ()method which will return a Observable/promise/boolean, this is the only criteria
export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(component: CanComponentDeactivate,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return component.canDeactivate();
  }
}
