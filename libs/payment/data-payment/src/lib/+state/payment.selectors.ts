import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PAYMENT_FEATURE_KEY, PaymentState } from './payment.reducer';

// Lookup the 'Payment' feature state managed by NgRx
const getPaymentState = createFeatureSelector<PaymentState>(
  PAYMENT_FEATURE_KEY
);

const getLoaded = createSelector(
  getPaymentState,
  (state: PaymentState) => state.loaded
);
const getError = createSelector(
  getPaymentState,
  (state: PaymentState) => state.error
);

const getAllPayment = createSelector(
  getPaymentState,
  getLoaded,
  (state: PaymentState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getPaymentState,
  (state: PaymentState) => state.selectedId
);
const getSelectedPayment = createSelector(
  getAllPayment,
  getSelectedId,
  (payment, id) => {
    const result = payment.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const paymentQuery = {
  getLoaded,
  getError,
  getAllPayment,
  getSelectedPayment
};
