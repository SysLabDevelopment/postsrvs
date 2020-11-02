import { TestBed } from '@angular/core/testing';

import { LibtestcomponentsService } from './libtestcomponents.service';

describe('LibtestcomponentsService', () => {
  let service: LibtestcomponentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibtestcomponentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
