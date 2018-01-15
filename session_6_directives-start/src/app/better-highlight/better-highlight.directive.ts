import { 
  Directive,
  OnInit,
  ElementRef,                         //To access the element where the attribute selector has been placed
  Renderer2,                          //A method to change the style of an element
  HostListener,                       //To listen for events with the componenet
  HostBinding,
  Input                               //Listen for property bindings
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
// Lecture 85 1. Really important to note, that the constructor of the directive, could containg, the refence to the component to which this directive has been rendered
// 2. the renderer argument will enable us, to access this component element, also in a server enviroment in the absence of the DOM.
// renderer, has quite a lot of built in methods, which can be used with components.

// Lecture 88, with HostBinding, we can access the backgroundColor subproperty of the style property of the component
// also we bind this property to a declared string variable, with some inital value
// Lecture 89, creating custom property bindings, to manipulate the background colors in the upper component's html
@Input() defaultColor : string = 'transparent';
@Input() highlightColor : string = 'blue';
@HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit(){
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','blue');
    this.backgroundColor = this.defaultColor;                                       // 89 assignin default property
  }
  //  Lecture 86 U can bind event to the elements of the components, and pass the event values as arguments
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','blue');    //85 string the renderer 
    // this.backgroundColor = 'blue';                                               //88
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement,'backgroundColor','yellow');
    // this.backgroundColor = 'transparent';
    this.backgroundColor = this.defaultColor;
  }

}
