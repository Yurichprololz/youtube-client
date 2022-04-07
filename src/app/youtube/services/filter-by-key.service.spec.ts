import { TestBed } from '@angular/core/testing';

import { FilterByKeyService } from './filter-by-key.service';

describe('FilterByKeyService', () => {
  let service: FilterByKeyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterByKeyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
