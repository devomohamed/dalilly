import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcodeComponent } from './allcode.component';

describe('AllcodeComponent', () => {
  let component: AllcodeComponent;
  let fixture: ComponentFixture<AllcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
