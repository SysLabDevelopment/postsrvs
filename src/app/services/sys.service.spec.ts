import { TestBed } from '@angular/core/testing';

import { SysService } from './sys.service';

describe('SysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SysService = TestBed.get(SysService);
    expect(service).toBeTruthy();
  });
});
