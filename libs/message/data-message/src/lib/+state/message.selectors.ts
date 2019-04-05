import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MESSAGE_FEATURE_KEY, MessageState } from './message.reducer';

// Lookup the 'Message' feature state managed by NgRx
const getMessageState = createFeatureSelector<MessageState>(
  MESSAGE_FEATURE_KEY
);

const getLoaded = createSelector(
  getMessageState,
  (state: MessageState) => state.loaded
);
const getError = createSelector(
  getMessageState,
  (state: MessageState) => state.error
);

const getAllMessage = createSelector(
  getMessageState,
  getLoaded,
  (state: MessageState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getMessageState,
  (state: MessageState) => state.selectedId
);
const getSelectedMessage = createSelector(
  getAllMessage,
  getSelectedId,
  (message, id) => {
    const result = message.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const messageQuery = {
  getLoaded,
  getError,
  getAllMessage,
  getSelectedMessage
};
