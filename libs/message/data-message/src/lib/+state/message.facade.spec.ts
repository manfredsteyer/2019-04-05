import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { MessageEffects } from './message.effects';
import { MessageFacade } from './message.facade';

import { messageQuery } from './message.selectors';
import { LoadMessage, MessageLoaded } from './message.actions';
import {
  MessageState,
  Entity,
  initialState,
  messageReducer
} from './message.reducer';

interface TestSchema {
  message: MessageState;
}

describe('MessageFacade', () => {
  let facade: MessageFacade;
  let store: Store<TestSchema>;
  let createMessage;

  beforeEach(() => {
    createMessage = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('message', messageReducer, { initialState }),
          EffectsModule.forFeature([MessageEffects])
        ],
        providers: [MessageFacade]
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule
        ]
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.get(Store);
      facade = TestBed.get(MessageFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allMessage$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allMessage$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `MessageLoaded` to manually submit list for state management
     */
    it('allMessage$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allMessage$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new MessageLoaded([createMessage('AAA'), createMessage('BBB')])
        );

        list = await readFirst(facade.allMessage$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
