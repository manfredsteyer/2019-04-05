import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { PaymentEffects } from './payment.effects';
import { LoadPayment, PaymentLoaded } from './payment.actions';

describe('PaymentEffects', () => {
  let actions: Observable<any>;
  let effects: PaymentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        PaymentEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(PaymentEffects);
  });

  describe('loadPayment$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadPayment() });
      expect(effects.loadPayment$).toBeObservable(
        hot('-a-|', { a: new PaymentLoaded([]) })
      );
    });
  });
});
