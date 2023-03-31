import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectparentcategoryComponent } from './selectparentcategory.component';

describe('SelectparentcategoryComponent', () => {
  let component: SelectparentcategoryComponent;
  let fixture: ComponentFixture<SelectparentcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectparentcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectparentcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
