import { Entity, PaymentState } from './payment.reducer';
import { paymentQuery } from './payment.selectors';

describe('Payment Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getPaymentId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createPayment = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      payment: {
        list: [
          createPayment('PRODUCT-AAA'),
          createPayment('PRODUCT-BBB'),
          createPayment('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Payment Selectors', () => {
    it('getAllPayment() should return the list of Payment', () => {
      const results = paymentQuery.getAllPayment(storeState);
      const selId = getPaymentId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedPayment() should return the selected Entity', () => {
      const result = paymentQuery.getSelectedPayment(storeState);
      const selId = getPaymentId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = paymentQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = paymentQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
