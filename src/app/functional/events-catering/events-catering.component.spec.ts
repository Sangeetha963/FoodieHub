import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsCateringComponent } from './events-catering.component';

describe('EventsCateringComponent', () => {
  let component: EventsCateringComponent;
  let fixture: ComponentFixture<EventsCateringComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventsCateringComponent]
    });
    fixture = TestBed.createComponent(EventsCateringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
