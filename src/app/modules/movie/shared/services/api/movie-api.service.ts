import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@appServices';
import { Observable } from 'rxjs';

import { MovieResourcesConstants } from '../../../constants';
import { MovieDto } from '../../dto';
import { IMovie } from '../../interfaces';

@Injectable()
export class MovieApiService extends ApiService {
    constructor(httpClient: HttpClient) {
        super(httpClient);
    }

    getMovieCollection(): Observable<Array<MovieDto>> {
        return this.get(MovieResourcesConstants.MOVIE_API, null);
    }

    getMovie(movieGlobalKey): Observable<MovieDto> {
        return this.get(`${MovieResourcesConstants.MOVIE_API}/${movieGlobalKey}`, null);
    }

    addMovie(movie: IMovie): Observable<MovieDto> {
        return this.post(`${MovieResourcesConstants.MOVIE_API}/${movie.movieGlobalKey}`, movie);
    }

    updateMovie(movie: IMovie): Observable<MovieDto> {
        return this.put(`${MovieResourcesConstants.MOVIE_API}/${movie.movieGlobalKey}`, movie);
    }
}