import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreSellerComponent } from './store-seller.component';

describe('StoreSellerComponent', () => {
  let component: StoreSellerComponent;
  let fixture: ComponentFixture<StoreSellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreSellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreSellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
