import { TestBed } from '@angular/core/testing';

import { MochDataService } from './moch-data.service';

describe('MochDataService', () => {
  let service: MochDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MochDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
