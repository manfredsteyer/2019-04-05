import { async, TestBed } from '@angular/core/testing';
import { PaymentFeatureCreatePaymentModule } from './payment-feature-create-payment.module';

describe('PaymentFeatureCreatePaymentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PaymentFeatureCreatePaymentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PaymentFeatureCreatePaymentModule).toBeDefined();
  });
});
