import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaddressincartComponent } from './editaddressincart.component';

describe('EditaddressincartComponent', () => {
  let component: EditaddressincartComponent;
  let fixture: ComponentFixture<EditaddressincartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaddressincartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditaddressincartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
