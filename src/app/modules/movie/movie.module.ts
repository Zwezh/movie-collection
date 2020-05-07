import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgModule } from '@angular/core';
import { ListItemModule } from '@appComponents/list-item';
import { ValidationMessagesModule } from '@appComponents/validation-message';
import { SharedModule } from '@appSharedModule';

import { MovieStore } from './shared/movie.store';
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
    MovieCreatePageComponent,
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
    MovieCreatePageComponent,
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
        ValidationMessagesModule
    ],
    declarations: [COMPONENTS],
    providers: [
        MovieStore,
        MovieModelService,
        MovieApiService
    ]
})
export class MovieModule { }
