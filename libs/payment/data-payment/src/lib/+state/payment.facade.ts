import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { PaymentPartialState } from './payment.reducer';
import { paymentQuery } from './payment.selectors';
import { LoadPayment } from './payment.actions';

@Injectable()
export class PaymentFacade {
  loaded$ = this.store.pipe(select(paymentQuery.getLoaded));
  allPayment$ = this.store.pipe(select(paymentQuery.getAllPayment));
  selectedPayment$ = this.store.pipe(select(paymentQuery.getSelectedPayment));

  constructor(private store: Store<PaymentPartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadPayment());
  }
}
