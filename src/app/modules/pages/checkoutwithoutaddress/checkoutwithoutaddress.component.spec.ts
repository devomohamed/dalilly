import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutwithoutaddressComponent } from './checkoutwithoutaddress.component';

describe('CheckoutwithoutaddressComponent', () => {
  let component: CheckoutwithoutaddressComponent;
  let fixture: ComponentFixture<CheckoutwithoutaddressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutwithoutaddressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutwithoutaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
