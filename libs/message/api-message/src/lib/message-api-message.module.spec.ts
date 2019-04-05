import { async, TestBed } from '@angular/core/testing';
import { MessageApiMessageModule } from './message-api-message.module';

describe('MessageApiMessageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MessageApiMessageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MessageApiMessageModule).toBeDefined();
  });
});
