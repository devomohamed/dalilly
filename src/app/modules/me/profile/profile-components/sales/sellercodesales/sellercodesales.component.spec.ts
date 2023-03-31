import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellercodesalesComponent } from './sellercodesales.component';

describe('SellercodesalesComponent', () => {
  let component: SellercodesalesComponent;
  let fixture: ComponentFixture<SellercodesalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellercodesalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellercodesalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
