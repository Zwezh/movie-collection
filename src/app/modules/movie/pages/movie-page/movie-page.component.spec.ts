/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MoviePageComponent } from './movie-page.component';

describe('MovieListPageComponent', () => {
    let component: MoviePageComponent;
    let fixture: ComponentFixture<MoviePageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MoviePageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MoviePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
