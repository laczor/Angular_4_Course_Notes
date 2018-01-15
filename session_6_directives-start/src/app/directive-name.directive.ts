import { Directive,Input, TemplateRef,ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveName]'
})
export class DirectiveNameDirective {
  // Lecture 91 appDirectiveName is a property, and with a setter, we can execute a function, 
  // condition, is a booleand defined argument, which will come from the property binding.
  @Input() set appDirectiveName (condition:boolean){
    if(!condition){
      // will create the view for the component, with the containing html elements as templates
      this.vcRef.createEmbeddedView(this.templateRef);
    }else{
      this.vcRef.clear();
    }
    
  }
// What-  Templateref is an injection of the template, we will have the reference for the selected template, <any> due to generic file
// and actually, this is the full html element, which holds the below html elements  where the directive has been assigned
// Where - ViewContainerRef - marks the place where we placed tis directive in the document.
  constructor(private templateRef: TemplateRef<any>,private vcRef: ViewContainerRef) { }

}
