import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { EditFieldModule } from '@appComponents/edit-field';
import { ListItemModule } from '@appComponents/list-item';
import { SharedModule } from '@appSharedModule';

import {
    MovieActionsComponent,
    MovieEditContentComponent,
    MovieEditPageComponent,
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
    MovieEditPageComponent,
    MovieViewPageComponent,
    MovieViewContentComponent,
    MovieEditContentComponent,
    MovieFilterPipe,
    MovieOrderByPipe
]

@NgModule({
    imports: [
        SharedModule,
        MovieRoutingModule,
        ScrollingModule,
        ListItemModule,
        EditFieldModule
    ],
    declarations: [COMPONENTS],
    providers: [
        MovieModelService,
        MovieApiService
    ]
})
export class MovieModule { }
