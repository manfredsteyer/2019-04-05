import { async, TestBed } from '@angular/core/testing';
import { SharedUiTechnicalProtocolModule } from './shared-ui-technical-protocol.module';

describe('SharedUiTechnicalProtocolModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiTechnicalProtocolModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiTechnicalProtocolModule).toBeDefined();
  });
});
