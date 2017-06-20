import { TestBed, inject } from '@angular/core/testing';

import { SportfestService } from './sportfest.service';

describe('SportfestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SportfestService]
    });
  });

  it('should be created', inject([SportfestService], (service: SportfestService) => {
    expect(service).toBeTruthy();
  }));
});
