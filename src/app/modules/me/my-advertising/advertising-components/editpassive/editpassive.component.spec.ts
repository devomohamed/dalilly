import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpassiveComponent } from './editpassive.component';

describe('EditpassiveComponent', () => {
  let component: EditpassiveComponent;
  let fixture: ComponentFixture<EditpassiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditpassiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpassiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
