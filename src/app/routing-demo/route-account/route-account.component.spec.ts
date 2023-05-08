import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteAccountComponent } from './route-account.component';

describe('RouteAccountComponent', () => {
  let component: RouteAccountComponent;
  let fixture: ComponentFixture<RouteAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
