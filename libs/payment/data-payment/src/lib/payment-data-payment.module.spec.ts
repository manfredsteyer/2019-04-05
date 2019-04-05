import { async, TestBed } from '@angular/core/testing';
import { PaymentDataPaymentModule } from './payment-data-payment.module';

describe('PaymentDataPaymentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PaymentDataPaymentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PaymentDataPaymentModule).toBeDefined();
  });
});
