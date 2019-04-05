import { async, TestBed } from '@angular/core/testing';
import { MessageFeatureSearchMessageModule } from './message-feature-search-message.module';

describe('MessageFeatureSearchMessageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MessageFeatureSearchMessageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MessageFeatureSearchMessageModule).toBeDefined();
  });
});
