import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDishComponent } from './search-dish.component';

describe('SearchDishComponent', () => {
  let component: SearchDishComponent;
  let fixture: ComponentFixture<SearchDishComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchDishComponent]
    });
    fixture = TestBed.createComponent(SearchDishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
