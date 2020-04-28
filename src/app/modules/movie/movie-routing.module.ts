import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import {
    MovieEditPageComponent,
    MovieListPageComponent,
    MovieViewPageComponent
} from './pages';

const routes: Routes = [
    {
        path: '',
        component: MovieListPageComponent,
        pathMatch: 'full'
    },
    {
        path: ':movieGlobalKey',
        component: MovieViewPageComponent
    },
    {
        path: 'edit/:movieGlobalKey',
        component: MovieEditPageComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class MovieRoutingModule { }
