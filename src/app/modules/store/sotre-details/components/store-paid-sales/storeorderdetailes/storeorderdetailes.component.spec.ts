import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreorderdetailesComponent } from './storeorderdetailes.component';

describe('StoreorderdetailesComponent', () => {
  let component: StoreorderdetailesComponent;
  let fixture: ComponentFixture<StoreorderdetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoreorderdetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoreorderdetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
