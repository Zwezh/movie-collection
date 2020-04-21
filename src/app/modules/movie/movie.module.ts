import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListItemModule } from '@appComponents/list-item';
import { SharedModule } from '@appSharedModule';
import { TranslateModule } from '@ngx-translate/core';

import {
    MovieActionsComponent,
    MovieItemComponent,
    MoviePageComponent,
    MovieViewContentComponent,
    MovieViewPageComponent
} from './components';
import { MovieRoutingModule } from './movie-routing.module';
import {
    MovieFilterPipe,
    MovieOrderByPipe
} from './pipes';
import {
    MovieApiService,
    MovieModelService
} from './services';

const COMPONENTS = [
    MovieActionsComponent,
    MovieItemComponent,
    MoviePageComponent,
    MovieViewPageComponent,
    MovieViewContentComponent,
    MovieFilterPipe,
    MovieOrderByPipe
]

@NgModule({
    imports: [
        SharedModule,
        MovieRoutingModule,
        ScrollingModule,
        ListItemModule
    ],
    declarations: [COMPONENTS],
    providers: [
        MovieModelService,
        MovieApiService
    ]
})
export class MovieModule { }
