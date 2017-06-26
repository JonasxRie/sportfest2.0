import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileHeaderImageComponent } from './mobile-header-image.component';

describe('MobileHeaderImageComponent', () => {
  let component: MobileHeaderImageComponent;
  let fixture: ComponentFixture<MobileHeaderImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileHeaderImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileHeaderImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
