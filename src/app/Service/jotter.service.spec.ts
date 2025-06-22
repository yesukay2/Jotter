import { TestBed } from '@angular/core/testing';

import { JotterService } from './jotter.service';

describe('JotterService', () => {
  let service: JotterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JotterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
