import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { EditFieldComponent } from './edit-field.component';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule
    ],
    declarations: [EditFieldComponent],
    exports: [EditFieldComponent]

})
export class EditFieldModule { }
