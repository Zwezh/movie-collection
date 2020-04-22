import { Injectable, Pipe } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { MovieDto } from '../dto';
import { IMovie } from '../interfaces';
import { initialMovieState } from '../state';
import { MovieApiService } from './api/movie-api.service';


@Injectable()
export class MovieModelService {

    private _movieList$: BehaviorSubject<Array<IMovie>>;
    get movieList(): Observable<Array<IMovie>> {
        return this._movieList$.asObservable();
    }

    private _selectedMovie$: BehaviorSubject<IMovie>;
    get selectedMovie$(): Observable<IMovie> {
        return this._selectedMovie$.asObservable();
    }
    constructor(private _apiService: MovieApiService) {
this.setInitalState();
    }

    setInitalState(): void {
        this._movieList$ = new BehaviorSubject<Array<IMovie>>(initialMovieState.movieCollection);
        this._selectedMovie$ = new BehaviorSubject<IMovie>(initialMovieState.movie);
    }

    getMovieCollection(): Observable<any> {
        return this._apiService.getMovieCollection().pipe(
            tap((response: Array<MovieDto>) => this._movieList$.next(response))
        );
    }

    getSelectedMovie(movieGlobalKey: string): Observable<any> {
        return this._apiService.getMovie(movieGlobalKey).pipe(
            tap((response: MovieDto) => this._selectedMovie$.next(response)));
    }
}