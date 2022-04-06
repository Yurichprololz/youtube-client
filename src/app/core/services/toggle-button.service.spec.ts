import { TestBed } from '@angular/core/testing';

import { ToggleButtonService } from './toggle-button.service';

describe('ToggleButtonService', () => {
  let service: ToggleButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToggleButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
