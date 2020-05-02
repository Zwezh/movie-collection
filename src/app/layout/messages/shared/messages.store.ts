import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { IMessage } from './message.interface';

@Injectable({
    providedIn: 'root'
})
export class MessagesStore {

    private _messages$: BehaviorSubject<Array<IMessage>>;
    get messages$(): Observable<Array<IMessage>> {
        return this._messages$.asObservable();
    }

    constructor() {
        this._messages$ = new BehaviorSubject(new Array<IMessage>());
    }

    addSuccessMessage(description: string): void {
        this.addMessage({ description, type: 'success' });
    }

    addErrorMessage(description: string): void {
        this.addMessage({ description, type: 'error' });
    }

    removeMessage(message: IMessage): void {
        this._messages$.next([...this._messages$.getValue().filter((item: IMessage) => item !== message)]);
    }

    private addMessage(message: IMessage): void {
        this._messages$.next([...this._messages$.getValue(), message]);
    }
}