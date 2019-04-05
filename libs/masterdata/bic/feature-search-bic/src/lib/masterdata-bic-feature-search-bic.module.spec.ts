import { async, TestBed } from '@angular/core/testing';
import { MasterdataBicFeatureSearchBicModule } from './masterdata-bic-feature-search-bic.module';

describe('MasterdataBicFeatureSearchBicModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MasterdataBicFeatureSearchBicModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MasterdataBicFeatureSearchBicModule).toBeDefined();
  });
});
