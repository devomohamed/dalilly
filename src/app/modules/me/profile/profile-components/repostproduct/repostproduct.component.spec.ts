import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepostproductComponent } from './repostproduct.component';

describe('RepostproductComponent', () => {
  let component: RepostproductComponent;
  let fixture: ComponentFixture<RepostproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RepostproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RepostproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
