import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysOfferComponent } from './todays-offer.component';

describe('TodaysOfferComponent', () => {
  let component: TodaysOfferComponent;
  let fixture: ComponentFixture<TodaysOfferComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TodaysOfferComponent]
    });
    fixture = TestBed.createComponent(TodaysOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
