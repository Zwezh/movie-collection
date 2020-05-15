import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApiService } from '../base-api.service';
import { KinopoiskDto } from './dto/kinopoisk.dto';

@Injectable()
export class KinopoiskApiService extends BaseApiService {

    private _movieUrl: string;

    constructor(httpClient: HttpClient) {
        super(httpClient);
        this._movieUrl = 'kinopoisk';
    }

    getById(id: number): Observable<KinopoiskDto> {
        return this.get(`${this._movieUrl}/${id}`, null);
    }

    loadPoster(id: number): Observable<any> {
        return this.post(`${this._movieUrl}/poster`, { id });
    }
}