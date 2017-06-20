import { TestBed, inject } from '@angular/core/testing';

import { TechnischerService } from './technischer.service';

describe('TechnischerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TechnischerService]
    });
  });

  it('should be created', inject([TechnischerService], (service: TechnischerService) => {
    expect(service).toBeTruthy();
  }));
});
