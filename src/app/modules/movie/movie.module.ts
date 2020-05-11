import { ScrollingModule } from '@angular/cdk/scrolling';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ListItemModule } from '@appComponents/list-item';
import { ValidationMessagesModule } from '@appComponents/validation-message';
import { SharedModule } from '@appSharedModule';
import { LoadingScreenInterceptor } from 'app/common/interceptors/loading.interceptor';

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
    MovieRatingComponent,
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
    MovieRatingComponent,
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
        MovieApiService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingScreenInterceptor,
            multi: true
        }
    ]
})
export class MovieModule { }
