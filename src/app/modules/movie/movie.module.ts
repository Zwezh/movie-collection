import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { EditFieldModule } from '@appComponents/edit-field';
import { ListItemModule } from '@appComponents/list-item';
import { SharedModule } from '@appSharedModule';

import {
    MovieFilterPipe,
    MovieOrderByPipe
} from './shared/pipes';
import {
    MovieApiService,
    MovieModelService
} from './shared/services';

import {
    MovieActionsComponent,
    MovieEditContentComponent,
    MovieItemComponent,
    MovieRaitingComponent,
    MovieViewContentComponent
} from './components';
import { MovieRoutingModule } from './movie-routing.module';
import {
    MovieEditPageComponent,
    MovieListPageComponent,
    MovieViewPageComponent
} from './pages';

const COMPONENTS = [
    MovieActionsComponent,
    MovieItemComponent,
    MovieListPageComponent,
    MovieEditPageComponent,
    MovieViewPageComponent,
    MovieViewContentComponent,
    MovieEditContentComponent,
    MovieRaitingComponent,
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
