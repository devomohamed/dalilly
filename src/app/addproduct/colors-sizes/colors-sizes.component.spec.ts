import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorsSizesComponent } from './colors-sizes.component';

describe('ColorsSizesComponent', () => {
  let component: ColorsSizesComponent;
  let fixture: ComponentFixture<ColorsSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorsSizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorsSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
