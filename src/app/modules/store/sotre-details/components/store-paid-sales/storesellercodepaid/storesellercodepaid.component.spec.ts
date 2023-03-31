import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresellercodepaidComponent } from './storesellercodepaid.component';

describe('StoresellercodepaidComponent', () => {
  let component: StoresellercodepaidComponent;
  let fixture: ComponentFixture<StoresellercodepaidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresellercodepaidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresellercodepaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
