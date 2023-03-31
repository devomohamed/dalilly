import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryStoresComponent } from './category-stores.component';

describe('CategoryStoresComponent', () => {
  let component: CategoryStoresComponent;
  let fixture: ComponentFixture<CategoryStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryStoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
