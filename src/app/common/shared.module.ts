import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { MTranslatorComponent } from './components/m-translator/m-translator.component';

const COMMON_COMPONENTS = [
    MTranslatorComponent,
    
]

@NgModule({
    imports: [
        TranslateModule,
        CommonModule,
        HttpClientModule
    ],
    declarations: [COMMON_COMPONENTS],
    exports: [COMMON_COMPONENTS]
})
export class SharedModule { }
