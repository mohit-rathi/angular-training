import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceWrapperComponent } from './service-wrapper.component';

describe('ServiceWrapperComponent', () => {
  let component: ServiceWrapperComponent;
  let fixture: ComponentFixture<ServiceWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
