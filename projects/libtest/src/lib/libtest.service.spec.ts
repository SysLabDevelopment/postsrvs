import { TestBed } from '@angular/core/testing';

import { LibtestService } from './libtest.service';

describe('LibtestService', () => {
  let service: LibtestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibtestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
