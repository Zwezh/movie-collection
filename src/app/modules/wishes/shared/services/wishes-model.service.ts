import { Injectable } from '@angular/core';
import {
    KinopoiskApiService,
    WishesApiService
} from '@appApi';
import { KinopoiskDto } from '@appApi/kinopoisk/dto/kinopoisk.dto';
import {
    CreateWishDto,
    WishDto
} from '@appApi/wishes/dto';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IWish } from '../interfaces';
import { WishesStore } from '../wishes.store';


@Injectable()
export class WishesModelService {

    get wishCollection(): Observable<Array<IWish>> {
        return this._store.wishCollection$;
    }

    get selectedWish$(): Observable<IWish> {
        return this._store.selectedWish$;
    }

    constructor(
        private _apiService: WishesApiService,
        private _kinopoiskApiService: KinopoiskApiService,
        private _store: WishesStore
    ) { }

    setSelectedWIsh(wish: IWish): void {
        this._store.setSelectedWish(wish);
    }

    getMovieCollection(): Observable<any> {
        this._store.resetState();
        return this._apiService.getWishCollection().pipe(
            tap((response: Array<WishDto>) => this._store.setWishCollection([{
                actors: "Маколей Калкин, Джо Пеши, Дэниел Стерн, Кэтрин О’Хара, Джон Хёрд, Робертс Блоссом, Джерри Бэммен, Девин Рэтрей, Джон Кэнди, Киран Калкин, ...",
                country: "США",
                director: "Крис Коламбус",
                duration: "103 мин. / 01:43",
                genre: "комедия, семейный",
                id: 8124,
                originalName: "Home Alone",
                rating: 8.238,
                russianName: "Один дома",
                year: 1990,
                description: "Description",
                wishGlobalKey: "5e8c93dcce903e5d90b21af0"
            }]))
        );
    }

    getSelectedMovie(wishGlobalKey: string): Observable<any> {
        const foundMovie = this.findMovieByGlobalKey(wishGlobalKey);
        if (foundMovie) {
            this._store.setSelectedWish(foundMovie);
            return this.selectedWish$;
        } else {
            return this._apiService.getWish(wishGlobalKey).pipe(
                tap((response: WishDto) => {
                    this._store.setSelectedWish(response);
                }));
        }
    }

    updateMovie(formValue: Partial<IWish>): Observable<any> {
        const wish = { ...this._store.selectedWish, ...formValue };
        return this._apiService.updateWish(wish).pipe(
            tap((response: WishDto) => {
                this._store.setSelectedWish(response);
            }));
    }

    createMovie(formValue: Partial<IWish>): Observable<any> {
        return this._apiService.addWish(formValue as CreateWishDto);
    }

    deleteMovie(wishGlobalKey: string): Observable<any> {
        return this._apiService.deleteWish(wishGlobalKey);
    }

    loadMovieFromKinopoisk(id: number): Observable<KinopoiskDto> {
        return this._kinopoiskApiService.getById(id);
    }

    loadPoster(id: number): Observable<KinopoiskDto> {
        return this._kinopoiskApiService.loadPoster(id);
    }

    private findMovieByGlobalKey(wishGlobalKey: string): IWish {
        return this._store.wishCollection.find((wish: IWish) => wish.wishGlobalKey === wishGlobalKey);
    }
}