import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDisciplineComponent } from './create-discipline.component';

describe('CreateDisciplineComponent', () => {
  let component: CreateDisciplineComponent;
  let fixture: ComponentFixture<CreateDisciplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDisciplineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDisciplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
