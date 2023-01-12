import { TestBed } from '@angular/core/testing';

import { PersonInterceptorService } from './person-interceptor.service';

describe('PersonInterceptorService', () => {
  let service: PersonInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
