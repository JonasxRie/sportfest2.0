import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateDisciplineComponent } from './activate-discipline.component';

describe('ActivateDisciplineComponent', () => {
  let component: ActivateDisciplineComponent;
  let fixture: ComponentFixture<ActivateDisciplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateDisciplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
