import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';

import {
    CreateMovieDto,
    MovieDto
} from './dto';

@Injectable()
export class MovieApiService extends ApiService {

    private _movieUrl: string;

    constructor(httpClient: HttpClient) {
        super(httpClient);
        this._movieUrl = 'movies';
    }

    getMovieCollection(): Observable<Array<MovieDto>> {
        return this.get(this._movieUrl, null);
    }

    getMovie(movieGlobalKey): Observable<MovieDto> {
        return this.get(`${this._movieUrl}/${movieGlobalKey}`, null);
    }

    addMovie(movie: CreateMovieDto): Observable<MovieDto> {
        return this.post(this._movieUrl, movie);
    }

    updateMovie(movie: MovieDto): Observable<MovieDto> {
        return this.put(`${this._movieUrl}/${movie.movieGlobalKey}`, movie);
    }
}