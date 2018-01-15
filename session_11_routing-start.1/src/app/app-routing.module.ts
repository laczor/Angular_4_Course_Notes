// 1. Import NgModule, to create custom module,
//+ Route, Routermodel as well //Routes - for defining routing paths, RouterModule, to import all of the defined routes + exports it
//2. Import all of the created components, in the routing section 
// 3. Using the @NgModule, decorator, we can import the data defined in the appRoutes (array of defined routes), to the Routermodule, which later can be exported to this typescript calls
// 4. Lastly it has to be exported with AppRoutingModule
// 
// 5. THis custom created module has to be imported in the app.module.ts file, @NgModule imőprts section
// 6. since we have declared, previously the components of the angular, we do not have to declared them again in this module.




import {NgModule} from '@angular/core';                                                     // To create custom module
import {Routes,RouterModule} from '@angular/router';                                        //Routes - for defining routing paths, RouterModule, to import all of the defined routes + exports it


import {HomeComponent} from './home/home.component';
import {UsersComponent} from './users/users.component';
import {UserComponent} from './users/user/user.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {EditServerComponent} from './servers/edit-server/edit-server.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuard} from './auth-guard.service';
import {CanDeactivateGuard} from './servers/edit-server/can-deactivate-guard.service';
import {ErrorPageComponent} from './error-page/error-page.component';
import {ServerResolver} from './servers/server/server-resolver.service';

const appRoutes: Routes = [
    {path:'',component: HomeComponent },
    {path:'users',component:UsersComponent, children: [
        {path:':id/:name',component:UserComponent }
      
      ] },
    {path:'servers',
    // canActivate: [AuthGuard],
    canActivateChild:[AuthGuard],
    component:ServersComponent,
    children: [
        {path:':id',component:ServerComponent, resolve: {server: ServerResolver}},
        {path:':id/edit',component:EditServerComponent, canDeactivate:[CanDeactivateGuard] },
      ]},
    // {path: 'not-found', component:PageNotFoundComponent },  
    {path: 'not-found', component:ErrorPageComponent, data: {message:"Page-not Found!"} },  
    {path: '**', redirectTo:'/not-found' }  
  ];
  

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
        ],
    exports:[RouterModule]
})
export class AppRoutingModule{
    
}