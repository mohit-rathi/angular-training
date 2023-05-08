import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteProductComponent } from './route-product.component';

describe('RouteProductComponent', () => {
  let component: RouteProductComponent;
  let fixture: ComponentFixture<RouteProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
