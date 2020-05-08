import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IMovie } from './interfaces';
import { initialMovieState } from './movie.state';

@Injectable()
export class MovieStore {

    private _movieList$: BehaviorSubject<Array<IMovie>>;
    get movieList$(): Observable<Array<IMovie>> {
        return this._movieList$.asObservable();
    }
    get movieList(): Array<IMovie> {
        return this._movieList$.getValue();
    }

    private _selectedMovie$: BehaviorSubject<IMovie>;
    get selectedMovie$() {
        return this._selectedMovie$.asObservable();
    }
    get selectedMovie(): IMovie {
        return this._selectedMovie$.getValue();
    }

    constructor() {
        this._movieList$ = new BehaviorSubject<Array<IMovie>>(initialMovieState.movieCollection);
        this._selectedMovie$ = new BehaviorSubject<IMovie>(initialMovieState.movie);
    }

    resetState(): void {
        this._movieList$.next(initialMovieState.movieCollection);
        this._selectedMovie$.next(initialMovieState.movie);
    }

    setMovieList(value: Array<IMovie>): void {
        this._movieList$.next(value);
    }

    setSelectedMovie(value: IMovie): void {
        this._selectedMovie$.next(value ? value : initialMovieState.movie);
    }
}