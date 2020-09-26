import { TestBed } from '@angular/core/testing';

import { ProtectPaymentGuard } from './protect-payment.guard';

describe('ProtectPaymentGuard', () => {
  let guard: ProtectPaymentGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectPaymentGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
