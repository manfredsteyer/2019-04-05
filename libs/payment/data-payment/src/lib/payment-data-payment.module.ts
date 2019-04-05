import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  PAYMENT_FEATURE_KEY,
  initialState as paymentInitialState,
  paymentReducer
} from './+state/payment.reducer';
import { PaymentEffects } from './+state/payment.effects';
import { PaymentFacade } from './+state/payment.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(PAYMENT_FEATURE_KEY, paymentReducer, {
      initialState: paymentInitialState
    }),
    EffectsModule.forFeature([PaymentEffects])
  ],
  providers: [PaymentFacade]
})
export class PaymentDataPaymentModule {}
