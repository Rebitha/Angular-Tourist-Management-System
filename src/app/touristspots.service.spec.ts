import { TestBed } from '@angular/core/testing';

import { TouristspotsService } from './touristspots.service';

describe('TouristspotsService', () => {
  let service: TouristspotsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TouristspotsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
