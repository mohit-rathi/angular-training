import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorThreeComponent } from './error-three.component';

describe('ErrorThreeComponent', () => {
  let component: ErrorThreeComponent;
  let fixture: ComponentFixture<ErrorThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
