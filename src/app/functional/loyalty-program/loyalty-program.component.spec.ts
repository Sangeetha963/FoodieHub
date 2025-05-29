import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoyaltyProgramComponent } from './loyalty-program.component';

describe('LoyaltyProgramComponent', () => {
  let component: LoyaltyProgramComponent;
  let fixture: ComponentFixture<LoyaltyProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoyaltyProgramComponent]
    });
    fixture = TestBed.createComponent(LoyaltyProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
