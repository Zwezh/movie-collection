import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApiService } from '../base-api.service';

import {
    CreateMovieDto,
    MovieDto
} from './dto';

@Injectable()
export class MovieApiService extends BaseApiService {

    private _movieUrl: string;

    constructor(httpClient: HttpClient) {
        super(httpClient);
        this._movieUrl = 'movies';
    }

    getMovieCollection(): Observable<Array<MovieDto>> {
        return this.get(this._movieUrl, null);
    }

    getMovie(movieGlobalKey: string): Observable<MovieDto> {
        return this.get(`${this._movieUrl}/${movieGlobalKey}`);
    }

    addMovie(movie: CreateMovieDto): Observable<MovieDto> {
        return this.post(this._movieUrl, movie);
    }

    updateMovie(movie: MovieDto): Observable<MovieDto> {
        return this.put(`${this._movieUrl}/${movie.movieGlobalKey}`, movie);
    }

    deleteMovie(movieGlobalKey: string): Observable<MovieDto> {
        return this.delete(`${this._movieUrl}/${movieGlobalKey}`);
    }
}