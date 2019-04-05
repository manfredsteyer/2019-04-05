import { async, TestBed } from '@angular/core/testing';
import { MasterdataBicDataBicModule } from './masterdata-bic-data-bic.module';

describe('MasterdataBicDataBicModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MasterdataBicDataBicModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MasterdataBicDataBicModule).toBeDefined();
  });
});
