import { Injectable } from '@angular/core';

import { select, Store } from '@ngrx/store';

import { MessagePartialState } from './message.reducer';
import { messageQuery } from './message.selectors';
import { LoadMessage } from './message.actions';

@Injectable()
export class MessageFacade {
  loaded$ = this.store.pipe(select(messageQuery.getLoaded));
  allMessage$ = this.store.pipe(select(messageQuery.getAllMessage));
  selectedMessage$ = this.store.pipe(select(messageQuery.getSelectedMessage));

  constructor(private store: Store<MessagePartialState>) {}

  loadAll() {
    this.store.dispatch(new LoadMessage());
  }
}
