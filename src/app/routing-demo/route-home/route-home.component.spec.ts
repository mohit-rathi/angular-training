import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteHomeComponent } from './route-home.component';

describe('RouteHomeComponent', () => {
  let component: RouteHomeComponent;
  let fixture: ComponentFixture<RouteHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
