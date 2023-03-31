import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorryComponent } from './categorry.component';

describe('CategorryComponent', () => {
  let component: CategorryComponent;
  let fixture: ComponentFixture<CategorryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
