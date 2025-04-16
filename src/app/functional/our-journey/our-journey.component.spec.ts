import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurJourneyComponent } from './our-journey.component';

describe('OurJourneyComponent', () => {
  let component: OurJourneyComponent;
  let fixture: ComponentFixture<OurJourneyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurJourneyComponent]
    });
    fixture = TestBed.createComponent(OurJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
