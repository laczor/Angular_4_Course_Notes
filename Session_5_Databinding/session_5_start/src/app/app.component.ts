import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
// Since serverLlements is an array with 1 object, wit key value pairs inserted, it conains 1 object, which can be parsed to server element component
  serverElements = [{type:'server',name:'Testserver',content:'test'}];

//Parsing the $event data which consist of two strings (serverName/serverContent) placed in a js object, which is used to
// put extra elements into the serverElements array.

  onServerAdded(serverData: {serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, serverContent:string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }
//Lecture 72 - add some methods, which will trigger changes in the server-element component 
  onChangeFirst() {
    this.serverElements[0].name = 'Changed!';             //modifying only the first element of the array
  }

  onDestroyFirst() {                                      //removing the last element from the array
    this.serverElements.splice(0, 1);
  }
}
