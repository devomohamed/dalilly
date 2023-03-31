import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleViewComponent } from './double-view.component';

describe('DoubleViewComponent', () => {
  let component: DoubleViewComponent;
  let fixture: ComponentFixture<DoubleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
