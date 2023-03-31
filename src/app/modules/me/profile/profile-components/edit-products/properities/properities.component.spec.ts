import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperitiesComponent } from './properities.component';

describe('ProperitiesComponent', () => {
  let component: ProperitiesComponent;
  let fixture: ComponentFixture<ProperitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProperitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProperitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
