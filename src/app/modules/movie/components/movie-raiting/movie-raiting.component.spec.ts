/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovieRaitingComponent } from './movie-raiting.component';

describe('MovieRaitingComponent', () => {
  let component: MovieRaitingComponent;
  let fixture: ComponentFixture<MovieRaitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieRaitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieRaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
