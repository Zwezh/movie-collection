/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MToastsComponent } from './m-toasts.component';

describe('MToastsComponent', () => {
  let component: MToastsComponent;
  let fixture: ComponentFixture<MToastsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MToastsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
