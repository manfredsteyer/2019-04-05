import { async, TestBed } from '@angular/core/testing';
import { MessageSharedMessageModule } from './message-shared-message.module';

describe('MessageSharedMessageModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MessageSharedMessageModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MessageSharedMessageModule).toBeDefined();
  });
});
