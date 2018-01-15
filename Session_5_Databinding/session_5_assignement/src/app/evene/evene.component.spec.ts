import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EveneComponent } from './evene.component';

describe('EveneComponent', () => {
  let component: EveneComponent;
  let fixture: ComponentFixture<EveneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EveneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EveneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
