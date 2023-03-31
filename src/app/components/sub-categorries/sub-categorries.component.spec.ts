import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategorriesComponent } from './sub-categorries.component';

describe('SubCategorriesComponent', () => {
  let component: SubCategorriesComponent;
  let fixture: ComponentFixture<SubCategorriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubCategorriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCategorriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
