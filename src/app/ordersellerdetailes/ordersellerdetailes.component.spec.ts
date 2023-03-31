import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersellerdetailesComponent } from './ordersellerdetailes.component';

describe('OrdersellerdetailesComponent', () => {
  let component: OrdersellerdetailesComponent;
  let fixture: ComponentFixture<OrdersellerdetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersellerdetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersellerdetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
