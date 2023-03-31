import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagesOfCatComponent } from './packages-of-cat.component';

describe('PackagesOfCatComponent', () => {
  let component: PackagesOfCatComponent;
  let fixture: ComponentFixture<PackagesOfCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagesOfCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagesOfCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
