import { Injectable } from '@angular/core';
import { Store } from '@appShared';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {
    private _countLoadings: number;
    private _loading$: Store<boolean>;
    get loading$() {
        return this._loading$.state$;
    }

    constructor() {
        this._loading$ = new Store<boolean>(false);
        this._countLoadings = 0;
    }

    startLoading(): void {
        if (this._countLoadings === 0) {
            this._loading$.setState(true);
        }
        this._countLoadings++;
    }

    stopLoading(): void {
        this._countLoadings--;
        if (this._countLoadings === 0) {
            this._loading$.setState(false);
        }
    }
}
