import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { X400Component } from './x400.component';

describe('X400Component', () => {
  let component: X400Component;
  let fixture: ComponentFixture<X400Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ X400Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(X400Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
