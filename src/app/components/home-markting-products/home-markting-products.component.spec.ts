import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMarktingProductsComponent } from './home-markting-products.component';

describe('HomeMarktingProductsComponent', () => {
  let component: HomeMarktingProductsComponent;
  let fixture: ComponentFixture<HomeMarktingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeMarktingProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMarktingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
