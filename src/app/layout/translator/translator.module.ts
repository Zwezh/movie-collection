import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from '@appComponents/header';
import { TranslateModule } from '@ngx-translate/core';

import { TranslatorComponent } from './translator.component';



@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        HeaderModule
    ],
    declarations: [TranslatorComponent],
    exports: [TranslatorComponent]
})
export class TranslatorModule { }
