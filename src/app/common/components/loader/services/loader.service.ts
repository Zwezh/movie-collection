import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@appShared';

@Injectable({
    providedIn: 'root'
})
export class LoaderService {

    private _loading$: Store<boolean>;
    get loading$() {
        return this._loading$.state$;
    }

    loadingStatus: Subject<boolean>;

    constructor() {
        this._loading$ = new Store<boolean>(false);
    }

    startLoading(): void {
        this._loading$.setState(true);
    }

    stopLoading(): void {
        this._loading$.setState(false);
    }
}
