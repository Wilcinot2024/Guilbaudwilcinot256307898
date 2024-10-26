import { TestBed } from '@angular/core/testing';

import { GuilbaudApiService } from './guilbaud-api.service';

describe('GuilbaudApiService', () => {
  let service: GuilbaudApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuilbaudApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
