import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { MessageEffects } from './message.effects';
import { LoadMessage, MessageLoaded } from './message.actions';

describe('MessageEffects', () => {
  let actions: Observable<any>;
  let effects: MessageEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        MessageEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(MessageEffects);
  });

  describe('loadMessage$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadMessage() });
      expect(effects.loadMessage$).toBeObservable(
        hot('-a-|', { a: new MessageLoaded([]) })
      );
    });
  });
});
