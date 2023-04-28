import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableOneComponent } from './observable-one.component';

describe('ObservableOneComponent', () => {
  let component: ObservableOneComponent;
  let fixture: ComponentFixture<ObservableOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
