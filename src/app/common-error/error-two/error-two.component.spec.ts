import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorTwoComponent } from './error-two.component';

describe('ErrorTwoComponent', () => {
  let component: ErrorTwoComponent;
  let fixture: ComponentFixture<ErrorTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
