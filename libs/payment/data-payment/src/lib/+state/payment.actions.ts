import { Action } from '@ngrx/store';
import { Entity } from './payment.reducer';

export enum PaymentActionTypes {
  LoadPayment = '[Payment] Load Payment',
  PaymentLoaded = '[Payment] Payment Loaded',
  PaymentLoadError = '[Payment] Payment Load Error'
}

export class LoadPayment implements Action {
  readonly type = PaymentActionTypes.LoadPayment;
}

export class PaymentLoadError implements Action {
  readonly type = PaymentActionTypes.PaymentLoadError;
  constructor(public payload: any) {}
}

export class PaymentLoaded implements Action {
  readonly type = PaymentActionTypes.PaymentLoaded;
  constructor(public payload: Entity[]) {}
}

export type PaymentAction = LoadPayment | PaymentLoaded | PaymentLoadError;

export const fromPaymentActions = {
  LoadPayment,
  PaymentLoaded,
  PaymentLoadError
};
