import { Action } from '@ngrx/store';
import { Entity } from './message.reducer';

export enum MessageActionTypes {
  LoadMessage = '[Message] Load Message',
  MessageLoaded = '[Message] Message Loaded',
  MessageLoadError = '[Message] Message Load Error'
}

export class LoadMessage implements Action {
  readonly type = MessageActionTypes.LoadMessage;
}

export class MessageLoadError implements Action {
  readonly type = MessageActionTypes.MessageLoadError;
  constructor(public payload: any) {}
}

export class MessageLoaded implements Action {
  readonly type = MessageActionTypes.MessageLoaded;
  constructor(public payload: Entity[]) {}
}

export type MessageAction = LoadMessage | MessageLoaded | MessageLoadError;

export const fromMessageActions = {
  LoadMessage,
  MessageLoaded,
  MessageLoadError
};
