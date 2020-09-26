import { TestBed } from '@angular/core/testing';

import { ProtectCustomerGuard } from './protect-customer.guard';

describe('ProtectCustomerGuard', () => {
  let guard: ProtectCustomerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectCustomerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
