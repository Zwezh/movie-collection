import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ValidationMessagesComponent } from './validation-messages.component';

@NgModule({
    imports: [
        CommonModule
    ],exports: [ValidationMessagesComponent],
    declarations: [ValidationMessagesComponent]
})
export class ValidationMessagesModule { }
