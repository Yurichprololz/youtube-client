import { TestBed } from '@angular/core/testing';

import { SortDirectionService } from './sort-direction.service';

describe('SortDirectionService', () => {
  let service: SortDirectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortDirectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
