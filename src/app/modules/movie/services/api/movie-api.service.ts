import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '@appServices';
import { Observable } from 'rxjs';

import { MovieApiConstants } from '../../constants';
import { MovieDto } from '../../dto';

@Injectable()
export class MovieApiService extends ApiService {
    constructor(httpClient: HttpClient) {
        super(httpClient);
    }

    getMovieCollection(): Observable<Array<MovieDto>> {
        return this.get(MovieApiConstants.GET_MOVIE_COLLECTION, null);
    }

    getMovie(movieGlobalKey): Observable<MovieDto> {
        const url = MovieApiConstants.GET_MOVIE.replace(':movieGlobalKey', movieGlobalKey);
        return this.get(url, null);
    }
}