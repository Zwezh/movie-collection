/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WishesListPageComponent } from './wishes-list-page.component';

describe('WishesListPageComponent', () => {
  let component: WishesListPageComponent;
  let fixture: ComponentFixture<WishesListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WishesListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WishesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
