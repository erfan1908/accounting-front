import { TestBed } from '@angular/core/testing';

import { LaningApiService } from './laning-api.service';

describe('LaningApiService', () => {
  let service: LaningApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaningApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
