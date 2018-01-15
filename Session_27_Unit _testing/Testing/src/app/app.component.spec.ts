/* tslint:disable:no-unused-variable */

// Testing package 
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
//We describe what we want ot test
//Which has an anonymus function which will be executed instantly
describe('App: CompleteGuideFinalWebpack', () => {
//We are setting up the settings which should be executed prior each testing 

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
  });

// it(name,async function)
// we are creating an app.component for the testing
// debugElement is a property, which enables us to access some elements, like 
// componentInstance which is the application itself
//Expect (selector).condition()
  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

//Access the title
  it(`should have as title 'app works!'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));
//Access an element
  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
