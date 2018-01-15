// This is a created, service file, which main purpose, is to determine & return it's only property, the user is authenticated or not.
// 1. isAuthenticated funciton is a but special, it is actually creating a new instance of a Promise, which will save the state of the function, if it is succeded, or not.
// So in this example what we are doing, is to wait 0.8 seconds and resolve, return the loggedIn property of this AuthService app (mimicing http request)
// 
// 




export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
