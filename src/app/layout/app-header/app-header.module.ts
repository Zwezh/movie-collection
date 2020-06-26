import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderModule } from '@appComponents';
import { TranslateModule } from '@ngx-translate/core';

import { TranslatorModule } from '../translator/translator.module';

import { AppHeaderComponent } from './app-header.component';



@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        TranslateModule,
        TranslatorModule,
        HeaderModule
    ],
    declarations: [AppHeaderComponent],
    exports: [AppHeaderComponent]
})
export class AppHeaderModule { }
