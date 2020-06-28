import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BaseApiService } from '../base-api.service';

import {
    CreateWishDto,
    WishDto
} from './dto';

@Injectable()
export class WishesApiService extends BaseApiService {

    private _url: string;

    constructor(httpClient: HttpClient) {
        super(httpClient);
        this._url = 'wishes';
    }

    getWishCollection(): Observable<Array<WishDto>> {
        return this.get(this._url, null);
    }

    getWish(wishGlobalKey: string): Observable<WishDto> {
        return this.get(`${this._url}/${wishGlobalKey}`);
    }

    addWish(wish: CreateWishDto): Observable<WishDto> {
        return this.post(this._url, wish);
    }

    updateWish(wish: WishDto): Observable<WishDto> {
        return this.put(`${this._url}/${wish.wishGlobalKey}`, wish);
    }

    deleteWish(wishGlobalKey: string): Observable<WishDto> {
        return this.delete(`${this._url}/${wishGlobalKey}`);
    }
}