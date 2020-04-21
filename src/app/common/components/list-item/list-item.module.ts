import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { ListItemComponent } from './list-item.component';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule
    ],
    declarations: [ListItemComponent],
    exports: [ListItemComponent]

})
export class ListItemModule { }
