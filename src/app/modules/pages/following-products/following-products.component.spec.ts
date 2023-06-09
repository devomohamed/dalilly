import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingProductsComponent } from './following-products.component';

describe('FollowingProductsComponent', () => {
  let component: FollowingProductsComponent;
  let fixture: ComponentFixture<FollowingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowingProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
