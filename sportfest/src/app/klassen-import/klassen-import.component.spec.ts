import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KlassenImportComponent } from './klassen-import.component';

describe('KlassenImportComponent', () => {
  let component: KlassenImportComponent;
  let fixture: ComponentFixture<KlassenImportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlassenImportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KlassenImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
