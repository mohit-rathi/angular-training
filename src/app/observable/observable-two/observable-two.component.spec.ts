import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableTwoComponent } from './observable-two.component';

describe('ObservableTwoComponent', () => {
  let component: ObservableTwoComponent;
  let fixture: ComponentFixture<ObservableTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
