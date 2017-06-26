import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMenuListComponent } from './mobile-menu-list.component';

describe('MobileMenuListComponent', () => {
  let component: MobileMenuListComponent;
  let fixture: ComponentFixture<MobileMenuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileMenuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
