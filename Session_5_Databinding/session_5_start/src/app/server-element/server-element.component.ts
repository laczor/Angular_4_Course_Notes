import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // None, Native
  ViewEncapsulation has to be imported from @angular/core
// At @Component you can add 
// encapsulation: ViewEncapsulation.Emulated ---> Default, will apply different selectors to each components (so a general "p" selector in the app.component.css won't be applied to the componenets)
// encapsulation: ViewEncapsulation.None	  ---> The general css in the app.component.css will be applied to every component (class selection won't work), since the specific component selectors are removed
// encapsulation: ViewEncapsulation.Native	  ---> Support shadow DOM / which is actually, not supported by every browser.
})
export class ServerElementComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy{ 
  // so we are declaring the element object, with it's key-value type declarations pairs.
  // we will know what type of data should we expect for our element.keys
  // by using the Input decorator, we can bind this element property, with property selector from other components
  // Practically <app-server-element> will have an [element] property to which values can be assigned, and due ti the Input decorator, this component is waiting the input
    @Input('srvElement') element: {type: string, name: string, content: string};
    @Input() name: string;
    @ViewChild('heading') header: ElementRef;   
    @ContentChild('contentParagraph') paragraph: ElementRef;
// 0. Each directive/interface has to be imported from @angular/core + included in the class implementations
// 1. Runs every time a component has been created constructor/ngOnInit
// 2. ngOnChanges, runs every time when the component has been changed.
// Has 1 argument: changes, with type of SimpleChanges(it has to be imported as well from @angular/core)
// change argument will tell us the current value of the component, the previous value before the change
  constructor() { 
     console.log('constructor called!');
  }
  ngOnChanges(changes: SimpleChanges){
     console.log('ngOnChange called!');
     console.log(changes);
  }
  ngOnInit() {
     console.log('ngOnInit called!');
  }
// (will be triggered, almost to any changes took place in the app)
  ngDoCheck() {
    console.log('ngDoCheck called!');
  }
// (will be triggered, when the content is projected  to the <ng-content>)
  ngAfterContentInit() {
  console.log('ngAfterContentInit called!');
  console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
// (will be triggered after each change detection cycle, to check if the content has been modified or not)
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }
// (when the view has been rendered to the component)
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
    console.log('Text Content: ' + this.header.nativeElement.textContent);
  }
// (when the view has been rendered to the component and checked to any changes)
// When the element is about to be destroyed
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }

}
