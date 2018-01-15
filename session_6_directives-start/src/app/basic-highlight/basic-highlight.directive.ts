import  {
    Directive,          //This is the declaration of this typescript file
    ElementRef,         //To get access to the elementRef deriective we use injectoion
    OnInit
} from '@angular/core';

@Directive({
    selector:'[appBasicHighlight]'          //We are using attribute selector, so if an element will have this attribute the directive will be activated
})

// Lecture 84, setting up manually
export class BasicHighlightDirective  implements OnInit {
    //adding a property of elementRef to the componenet with the type of ElenemtRef
    constructor(private elementRef:ElementRef){
    }
    ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor="yellow";  
        console.log('First directive created');
    }
}