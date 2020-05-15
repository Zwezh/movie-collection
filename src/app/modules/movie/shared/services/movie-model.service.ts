import { Injectable } from '@angular/core';
import {
    KinopoiskApiService,
    MovieApiService
} from '@appApi';
import { KinopoiskDto } from '@appApi/kinopoisk/dto/kinopoisk.dto';
import { CreateMovieDto, MovieDto } from '@appApi/movies/dto';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IMovie } from '../interfaces';
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
        private _kinopoiskApiService: KinopoiskApiService,
        private _store: MovieStore
    ) { }

    setSelectedMovie(movie: IMovie): void {
        this._store.setSelectedMovie(movie);
    }

    getMovieCollection(): Observable<any> {
        this._store.resetState();
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
                this._store.setSelectedMovie(response);
            }));
    }

    createMovie(formValue: Partial<IMovie>): Observable<any> {
        return this._apiService.addMovie(formValue as CreateMovieDto);
    }

    deleteMovie(movieGlobalKey: string): Observable<any> {
        return this._apiService.deleteMovie(movieGlobalKey);
    }

    loadMovieFromKinopoisk(id: number): Observable<KinopoiskDto> {
        return this._kinopoiskApiService.getById(id);
    }

    loadPoster(id: number): Observable<KinopoiskDto> {
        return this._kinopoiskApiService.loadPoster(id);
    }

    private findMovieByGlobalKey(movieGlobalKey: string): IMovie {
        return this._store.movieList.find((movie: IMovie) => movie.movieGlobalKey === movieGlobalKey);
    }
}