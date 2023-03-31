import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellercoderejectedComponent } from './sellercoderejected.component';

describe('SellercoderejectedComponent', () => {
  let component: SellercoderejectedComponent;
  let fixture: ComponentFixture<SellercoderejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellercoderejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellercoderejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
