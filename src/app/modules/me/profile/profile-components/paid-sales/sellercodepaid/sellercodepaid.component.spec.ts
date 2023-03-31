import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellercodepaidComponent } from './sellercodepaid.component';

describe('SellercodepaidComponent', () => {
  let component: SellercodepaidComponent;
  let fixture: ComponentFixture<SellercodepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellercodepaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellercodepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
