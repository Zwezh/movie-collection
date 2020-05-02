import {
    ChangeDetectionStrategy,
    Component
} from '@angular/core';
import { FADE_IN_CONTENT_BY_TRANSLATE_X } from '@appConstants';
import { Observable } from 'rxjs';

import { IMessage } from '../../shared/message.interface';
import { MessagesStore } from '../../shared/messages.store';

@Component({
    selector: 'mc-messages',
    templateUrl: './messages.component.html',
    styleUrls: ['./messages.component.scss'],
    animations: [FADE_IN_CONTENT_BY_TRANSLATE_X],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesComponent {

    messages$: Observable<Array<IMessage>>;

    constructor(private _messagesStore: MessagesStore) {
        this.messages$ = _messagesStore.messages$
    }

    onCompleted(message: IMessage): void {
        this._messagesStore.removeMessage(message);
    }
}
