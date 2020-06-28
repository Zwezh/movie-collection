import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IWish } from './interfaces';
import { initialWishesState } from './wishes.state';

@Injectable()
export class WishesStore {

    private _wishCollection$: BehaviorSubject<Array<IWish>>;
    get wishCollection$(): Observable<Array<IWish>> {
        return this._wishCollection$.asObservable();
    }
    get wishCollection(): Array<IWish> {
        return this._wishCollection$.getValue();
    }

    private _selectedWish$: BehaviorSubject<IWish>;
    get selectedWish$(): Observable<IWish> {
        return this._selectedWish$.asObservable();
    }
    get selectedWish(): IWish {
        return this._selectedWish$.getValue();
    }

    constructor() {
        this._wishCollection$ = new BehaviorSubject<Array<IWish>>(initialWishesState.wishCollection);
        this._selectedWish$ = new BehaviorSubject<IWish>(initialWishesState.wish);
    }

    resetState(): void {
        this._wishCollection$.next(initialWishesState.wishCollection);
        this._selectedWish$.next(initialWishesState.wish);
    }

    setWishCollection(value: Array<IWish>): void {
        this._wishCollection$.next(value);
    }

    setSelectedWish(value: IWish): void {
        this._selectedWish$.next(value ? value : initialWishesState.wish);
    }
}