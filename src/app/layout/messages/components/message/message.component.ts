import {
    Component,
    EventEmitter,
    Input,
    OnInit,
    Output
} from '@angular/core';

import { IMessage } from '../../shared';

@Component({
    selector: 'mc-message',
    template: '<p class="message text-description text-overflow" [ngClass]="message.type">{{message.description}}</p>',
    styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

    @Input() message: IMessage;
    @Output('completed') onCompletedEvent: EventEmitter<IMessage>;

    constructor() {
        this.onCompletedEvent = new EventEmitter<IMessage>();
    }

    ngOnInit(): void {
        setTimeout(() => this.onCompletedEvent.emit(this.message), 4500);
    }

}
