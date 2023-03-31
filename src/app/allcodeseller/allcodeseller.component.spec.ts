import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcodesellerComponent } from './allcodeseller.component';

describe('AllcodesellerComponent', () => {
  let component: AllcodesellerComponent;
  let fixture: ComponentFixture<AllcodesellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllcodesellerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcodesellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
