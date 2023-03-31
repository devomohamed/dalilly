import { TestBed } from '@angular/core/testing';

import { LocationsInformationService } from './locations-information.service';

describe('LocationsInformationService', () => {
  let service: LocationsInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationsInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
