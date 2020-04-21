import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { IToast } from '../interfaces/toast.interface';

@Injectable({
    providedIn: 'root'
})
export class MToastService {

    private _messageCollection: Array<IToast>;

    constructor() {
        this._messageCollection = new Array<IToast>();
    }

    showToast(message, type = 'info'): void {
        this._messageCollection = [...this._messageCollection, { message, type }];
    }

}
