import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

const COMMON_MODULES = [
    CommonModule,
    FormsModule,
    HttpClientModule,
    TranslateModule
];


@NgModule({
    imports: [COMMON_MODULES],
    exports: [COMMON_MODULES]
})
export class SharedModule { }
