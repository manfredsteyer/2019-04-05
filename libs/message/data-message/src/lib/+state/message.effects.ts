import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { MessagePartialState } from './message.reducer';
import {
  LoadMessage,
  MessageLoaded,
  MessageLoadError,
  MessageActionTypes
} from './message.actions';

@Injectable()
export class MessageEffects {
  @Effect() loadMessage$ = this.dataPersistence.fetch(
    MessageActionTypes.LoadMessage,
    {
      run: (action: LoadMessage, state: MessagePartialState) => {
        // Your custom REST 'load' logic goes here. For now just return an empty list...
        return new MessageLoaded([]);
      },

      onError: (action: LoadMessage, error) => {
        console.error('Error', error);
        return new MessageLoadError(error);
      }
    }
  );

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<MessagePartialState>
  ) {}
}
