import { Entity, MessageState } from './message.reducer';
import { messageQuery } from './message.selectors';

describe('Message Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getMessageId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createMessage = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      message: {
        list: [
          createMessage('PRODUCT-AAA'),
          createMessage('PRODUCT-BBB'),
          createMessage('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('Message Selectors', () => {
    it('getAllMessage() should return the list of Message', () => {
      const results = messageQuery.getAllMessage(storeState);
      const selId = getMessageId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedMessage() should return the selected Entity', () => {
      const result = messageQuery.getSelectedMessage(storeState);
      const selId = getMessageId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = messageQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = messageQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
