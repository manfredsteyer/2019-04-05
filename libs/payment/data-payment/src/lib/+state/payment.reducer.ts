import { PaymentAction, PaymentActionTypes } from './payment.actions';

export const PAYMENT_FEATURE_KEY = 'payment';

/**
 * Interface for the 'Payment' data used in
 *  - PaymentState, and
 *  - paymentReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface PaymentState {
  list: Entity[]; // list of Payment; analogous to a sql normalized table
  selectedId?: string | number; // which Payment record has been selected
  loaded: boolean; // has the Payment list been loaded
  error?: any; // last none error (if any)
}

export interface PaymentPartialState {
  readonly [PAYMENT_FEATURE_KEY]: PaymentState;
}

export const initialState: PaymentState = {
  list: [],
  loaded: false
};

export function paymentReducer(
  state: PaymentState = initialState,
  action: PaymentAction
): PaymentState {
  switch (action.type) {
    case PaymentActionTypes.PaymentLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
