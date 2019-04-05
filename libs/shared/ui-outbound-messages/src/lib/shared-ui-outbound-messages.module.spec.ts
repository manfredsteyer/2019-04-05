import { async, TestBed } from '@angular/core/testing';
import { SharedUiOutboundMessagesModule } from './shared-ui-outbound-messages.module';

describe('SharedUiOutboundMessagesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiOutboundMessagesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiOutboundMessagesModule).toBeDefined();
  });
});
