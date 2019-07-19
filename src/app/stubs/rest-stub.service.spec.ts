import { TestBed } from '@angular/core/testing';

import { RestStubService } from './rest-stub.service';

fdescribe('RestStubService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [RestStubService]
    })
  );

  it('should be created', () => {
    const service: RestStubService = TestBed.get(RestStubService);
    expect(service).toBeTruthy();
  });
});
