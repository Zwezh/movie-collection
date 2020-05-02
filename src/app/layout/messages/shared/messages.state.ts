import { IMessage } from './message.interface';

export class MessagesState {
    messages: Array<IMessage>;
    constructor() {
        this.messages = new Array<IMessage>();
    }
}