/* tslint:disable:no-unused-variable */
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MovieItemComponent } from './movie-item.component';

describe('MovieListItemComponent', () => {
    let component: MovieItemComponent;
    let fixture: ComponentFixture<MovieItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [MovieItemComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
