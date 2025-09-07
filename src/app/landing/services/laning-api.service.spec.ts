import { TestBed } from '@angular/core/testing';

import { LandingApiService } from './laning-api.service';

describe('LaningApiService', () => {
  let service: LandingApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LandingApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
