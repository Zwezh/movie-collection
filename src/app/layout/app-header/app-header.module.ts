import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderModule } from '@appComponents/header';
import { TranslateModule } from '@ngx-translate/core';

import { AppHeaderComponent } from './app-header.component';



@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        HeaderModule
    ],
    declarations: [AppHeaderComponent],
    exports: [AppHeaderComponent]
})
export class AppHeaderModule { }
