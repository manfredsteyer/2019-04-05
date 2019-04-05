import { PaymentLoaded } from './payment.actions';
import {
  PaymentState,
  Entity,
  initialState,
  paymentReducer
} from './payment.reducer';

describe('Payment Reducer', () => {
  const getPaymentId = it => it['id'];
  let createPayment;

  beforeEach(() => {
    createPayment = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Payment actions ', () => {
    it('should return set the list of known Payment', () => {
      const payments = [
        createPayment('PRODUCT-AAA'),
        createPayment('PRODUCT-zzz')
      ];
      const action = new PaymentLoaded(payments);
      const result: PaymentState = paymentReducer(initialState, action);
      const selId: string = getPaymentId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = paymentReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
