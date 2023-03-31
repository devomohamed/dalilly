import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditColorsSizesComponent } from './edit-colors-sizes.component';

describe('EditColorsSizesComponent', () => {
  let component: EditColorsSizesComponent;
  let fixture: ComponentFixture<EditColorsSizesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditColorsSizesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditColorsSizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
