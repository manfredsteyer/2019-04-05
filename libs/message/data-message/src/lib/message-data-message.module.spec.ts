import { async, TestBed } from '@angular/core/testing';
import { MessageDataMessageModule } from './message-data-message.module';

describe('MessageDataMessageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MessageDataMessageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MessageDataMessageModule).toBeDefined();
  });
});
