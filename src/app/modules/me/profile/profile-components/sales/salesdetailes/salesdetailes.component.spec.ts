import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesdetailesComponent } from './salesdetailes.component';

describe('SalesdetailesComponent', () => {
  let component: SalesdetailesComponent;
  let fixture: ComponentFixture<SalesdetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesdetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesdetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
