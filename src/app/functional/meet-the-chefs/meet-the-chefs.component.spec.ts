import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetTheChefsComponent } from './meet-the-chefs.component';

describe('MeetTheChefsComponent', () => {
  let component: MeetTheChefsComponent;
  let fixture: ComponentFixture<MeetTheChefsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeetTheChefsComponent]
    });
    fixture = TestBed.createComponent(MeetTheChefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
