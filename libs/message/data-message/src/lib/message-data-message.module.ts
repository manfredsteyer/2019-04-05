import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  MESSAGE_FEATURE_KEY,
  initialState as messageInitialState,
  messageReducer
} from './+state/message.reducer';
import { MessageEffects } from './+state/message.effects';
import { MessageFacade } from './+state/message.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(MESSAGE_FEATURE_KEY, messageReducer, {
      initialState: messageInitialState
    }),
    EffectsModule.forFeature([MessageEffects])
  ],
  providers: [MessageFacade]
})
export class MessageDataMessageModule {}
