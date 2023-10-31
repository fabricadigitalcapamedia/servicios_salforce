import { TestBed } from '@angular/core/testing';

import { ConsulmicroService } from './consulmicro.service';

describe('ConsulmicroService', () => {
  let service: ConsulmicroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsulmicroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
