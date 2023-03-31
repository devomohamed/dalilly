import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcodeComponent } from './viewcode.component';

describe('ViewcodeComponent', () => {
  let component: ViewcodeComponent;
  let fixture: ComponentFixture<ViewcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewcodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
