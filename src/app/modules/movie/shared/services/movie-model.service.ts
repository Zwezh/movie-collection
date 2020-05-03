import { Injectable, Pipe } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { MovieDto } from '../dto';
import { IMovie } from '../interfaces';
import { MovieApiService } from './api/movie-api.service';
import { MovieStore } from '../movie.store';


@Injectable()
export class MovieModelService {

    get movieList(): Observable<Array<IMovie>> {
        return this._store.movieList$;
    }

    get selectedMovie$(): Observable<IMovie> {
        return this._store.selectedMovie$;
    }

    constructor(
        private _apiService: MovieApiService,
        private _store: MovieStore
    ) { }

    setSelectedMovie(movie: IMovie): void {
        this._store.setSelectedMovie(movie);
    }

    getMovieCollection(): Observable<any> {
        return this._apiService.getMovieCollection().pipe(
            tap((response: Array<MovieDto>) => this._store.setMovieList(response))
        );
    }

    getSelectedMovie(movieGlobalKey: string): Observable<any> {
        const foundMovie = this.findMovieByGlobalKey(movieGlobalKey);
        if (foundMovie) {
            this._store.setSelectedMovie(foundMovie);
            return this.selectedMovie$;
        } else {
            return this._apiService.getMovie(movieGlobalKey).pipe(
                tap((response: MovieDto) => {
                    this._store.setSelectedMovie(response);
                }));
        }
    }

    updateMovie(formValue: Partial<IMovie>): Observable<any> {
        const movie = { ...this._store.selectedMovie, ...formValue };

        return this._apiService.updateMovie(movie).pipe(
            tap((response: MovieDto) => {
                this._store.setSelectedMovie(response)
            }));
    }

    private findMovieByGlobalKey(movieGlobalKey): IMovie {
        return this._store.movieList.find((movie: IMovie) => movie.movieGlobalKey === movieGlobalKey);
    }
}