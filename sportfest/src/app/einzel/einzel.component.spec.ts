import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EinzelComponent } from './einzel.component';

describe('EinzelComponent', () => {
  let component: EinzelComponent;
  let fixture: ComponentFixture<EinzelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EinzelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EinzelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
