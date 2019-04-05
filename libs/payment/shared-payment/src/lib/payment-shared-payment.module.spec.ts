import { async, TestBed } from '@angular/core/testing';
import { PaymentSharedPaymentModule } from './payment-shared-payment.module';

describe('PaymentSharedPaymentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PaymentSharedPaymentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PaymentSharedPaymentModule).toBeDefined();
  });
});
