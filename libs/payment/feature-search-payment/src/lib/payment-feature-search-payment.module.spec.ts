import { async, TestBed } from '@angular/core/testing';
import { PaymentFeatureSearchPaymentModule } from './payment-feature-search-payment.module';

describe('PaymentFeatureSearchPaymentModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PaymentFeatureSearchPaymentModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PaymentFeatureSearchPaymentModule).toBeDefined();
  });
});
