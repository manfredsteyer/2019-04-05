import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/nx/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/nx';

import { PaymentEffects } from './payment.effects';
import { PaymentFacade } from './payment.facade';

import { paymentQuery } from './payment.selectors';
import { LoadPayment, PaymentLoaded } from './payment.actions';
import {
  PaymentState,
  Entity,
  initialState,
  paymentReducer
} from './payment.reducer';

interface TestSchema {
  payment: PaymentState;
}

describe('PaymentFacade', () => {
  let facade: PaymentFacade;
  let store: Store<TestSchema>;
  let createPayment;

  beforeEach(() => {
    createPayment = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature('payment', paymentReducer, { initialState }),
          EffectsModule.forFeature([PaymentEffects])
        ],
        providers: [PaymentFacade]
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
      facade = TestBed.get(PaymentFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async done => {
      try {
        let list = await readFirst(facade.allPayment$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.loadAll();

        list = await readFirst(facade.allPayment$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `PaymentLoaded` to manually submit list for state management
     */
    it('allPayment$ should return the loaded list; and loaded flag == true', async done => {
      try {
        let list = await readFirst(facade.allPayment$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          new PaymentLoaded([createPayment('AAA'), createPayment('BBB')])
        );

        list = await readFirst(facade.allPayment$);
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
