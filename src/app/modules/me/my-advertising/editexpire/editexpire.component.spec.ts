import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditexpireComponent } from './editexpire.component';

describe('EditexpireComponent', () => {
  let component: EditexpireComponent;
  let fixture: ComponentFixture<EditexpireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditexpireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditexpireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
