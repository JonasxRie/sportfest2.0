import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSportfestComponent } from './create-sportfest.component';

describe('CreateSportfestComponent', () => {
  let component: CreateSportfestComponent;
  let fixture: ComponentFixture<CreateSportfestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSportfestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSportfestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
