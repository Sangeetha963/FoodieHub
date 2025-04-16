import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimateDemoComponent } from './animate-demo.component';

describe('AnimateDemoComponent', () => {
  let component: AnimateDemoComponent;
  let fixture: ComponentFixture<AnimateDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnimateDemoComponent]
    });
    fixture = TestBed.createComponent(AnimateDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
