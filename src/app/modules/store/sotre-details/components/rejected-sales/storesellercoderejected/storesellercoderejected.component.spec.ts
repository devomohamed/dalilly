import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresellercoderejectedComponent } from './storesellercoderejected.component';

describe('StoresellercoderejectedComponent', () => {
  let component: StoresellercoderejectedComponent;
  let fixture: ComponentFixture<StoresellercoderejectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresellercoderejectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresellercoderejectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
