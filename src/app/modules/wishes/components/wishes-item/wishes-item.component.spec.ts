/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WishesItemComponent } from './wishes-item.component';

describe('WishesItemComponent', () => {
  let component: WishesItemComponent;
  let fixture: ComponentFixture<WishesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
