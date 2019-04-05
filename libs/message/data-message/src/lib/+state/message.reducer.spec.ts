import { MessageLoaded } from './message.actions';
import {
  MessageState,
  Entity,
  initialState,
  messageReducer
} from './message.reducer';

describe('Message Reducer', () => {
  const getMessageId = it => it['id'];
  let createMessage;

  beforeEach(() => {
    createMessage = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid Message actions ', () => {
    it('should return set the list of known Message', () => {
      const messages = [
        createMessage('PRODUCT-AAA'),
        createMessage('PRODUCT-zzz')
      ];
      const action = new MessageLoaded(messages);
      const result: MessageState = messageReducer(initialState, action);
      const selId: string = getMessageId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = messageReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
