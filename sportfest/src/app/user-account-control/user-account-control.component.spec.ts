import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAccountControlComponent } from './user-account-control.component';

describe('UserAccountControlComponent', () => {
  let component: UserAccountControlComponent;
  let fixture: ComponentFixture<UserAccountControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAccountControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAccountControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
