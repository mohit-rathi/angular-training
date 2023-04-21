import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorOneComponent } from './error-one.component';

describe('ErrorOneComponent', () => {
  let component: ErrorOneComponent;
  let fixture: ComponentFixture<ErrorOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
