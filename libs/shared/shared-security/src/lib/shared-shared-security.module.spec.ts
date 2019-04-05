import { async, TestBed } from '@angular/core/testing';
import { SharedSharedSecurityModule } from './shared-shared-security.module';

describe('SharedSharedSecurityModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedSharedSecurityModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedSharedSecurityModule).toBeDefined();
  });
});
