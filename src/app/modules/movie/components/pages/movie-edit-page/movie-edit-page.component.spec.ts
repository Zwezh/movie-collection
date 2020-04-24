/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MovieEditPageComponent } from './movie-edit-page.component';

describe('MovieEditPageComponent', () => {
  let component: MovieEditPageComponent;
  let fixture: ComponentFixture<MovieEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
