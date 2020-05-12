import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from '@appComponents';
import { TranslateModule } from '@ngx-translate/core';

import { MessageComponent } from './components/message/message.component';
import { MessagesComponent } from './components/messages/messages.component';



@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        HeaderModule
    ],
    declarations: [
        MessagesComponent,
        MessageComponent
    ],
    exports: [MessagesComponent]
})
export class MessagesModule { }
