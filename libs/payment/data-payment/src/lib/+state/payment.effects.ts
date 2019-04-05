import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { PaymentPartialState } from './payment.reducer';
import {
  LoadPayment,
  PaymentLoaded,
  PaymentLoadError,
  PaymentActionTypes
} from './payment.actions';

@Injectable()
export class PaymentEffects {
  @Effect() loadPayment$ = this.dataPersistence.fetch(
    PaymentActionTypes.LoadPayment,
    {
      run: (action: LoadPayment, state: PaymentPartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new PaymentLoaded([]);
      },

      onError: (action: LoadPayment, error) => {
        console.error('Error', error);
        return new PaymentLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<PaymentPartialState>
  ) {}
}
