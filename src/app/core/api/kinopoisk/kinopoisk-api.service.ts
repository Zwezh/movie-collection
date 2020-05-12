import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { BaseDto } from '../base.dto';

@Injectable()
export class KinopoiskApiService extends ApiService {

    private _movieUrl: string;

    constructor(httpClient: HttpClient) {
        super(httpClient);
        this._movieUrl = 'kinopoisk';
    }

    getById(id:number): Observable<BaseDto> {
        return this.get(`${this._movieUrl}/${id}`, null);
    }

}