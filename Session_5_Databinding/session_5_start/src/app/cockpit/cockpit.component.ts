import { Component, OnInit, EventEmitter,Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
@Output() serverCreated = new EventEmitter<{serverName: string, serverContent:string}>();
@Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent:string}>();

// Actually here, we are using ViewChild decorator, to look for a local reference id of "serverContentInput", which type has been set as ElementRef
// ElementRef means it is a reference to an element, ElementRef.nativeElement = the real DOM element with all of it's properties
@ViewChild('serverContentInput') serverContentInput: ElementRef;

// these variables were used with the ngModel two way databinding, where we were able to bind the component's property to the input value and viceversa
  // newServerName = '';
  // newServerContent = '';
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value});
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value});
  }
}
