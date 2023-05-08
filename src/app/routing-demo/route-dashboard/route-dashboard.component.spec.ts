import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteDashboardComponent } from './route-dashboard.component';

describe('RouteDashboardComponent', () => {
  let component: RouteDashboardComponent;
  let fixture: ComponentFixture<RouteDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
