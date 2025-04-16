import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPreviewSectionComponent } from './menu-preview-section.component';

describe('MenuPreviewSectionComponent', () => {
  let component: MenuPreviewSectionComponent;
  let fixture: ComponentFixture<MenuPreviewSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuPreviewSectionComponent]
    });
    fixture = TestBed.createComponent(MenuPreviewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
