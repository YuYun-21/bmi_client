import { TestBed } from '@angular/core/testing';

import { StuinfoService } from './stuinfo.service';

describe('StuinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StuinfoService = TestBed.get(StuinfoService);
    expect(service).toBeTruthy();
  });
});
