import { MessageAction, MessageActionTypes } from './message.actions';

export const MESSAGE_FEATURE_KEY = 'message';

/**
 * Interface for the 'Message' data used in
 *  - MessageState, and
 *  - messageReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface MessageState {
  list: Entity[]; // list of Message; analogous to a sql normalized table
  selectedId?: string | number; // which Message record has been selected
  loaded: boolean; // has the Message list been loaded
  error?: any; // last none error (if any)
}

export interface MessagePartialState {
  readonly [MESSAGE_FEATURE_KEY]: MessageState;
}

export const initialState: MessageState = {
  list: [],
  loaded: false
};

export function messageReducer(
  state: MessageState = initialState,
  action: MessageAction
): MessageState {
  switch (action.type) {
    case MessageActionTypes.MessageLoaded: {
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
