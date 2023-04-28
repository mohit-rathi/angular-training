import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveOneComponent } from './directive-one.component';

describe('DirectiveOneComponent', () => {
  let component: DirectiveOneComponent;
  let fixture: ComponentFixture<DirectiveOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
