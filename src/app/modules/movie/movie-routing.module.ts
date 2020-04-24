import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import {
    MovieEditPageComponent,
    MoviePageComponent,
    MovieViewPageComponent
} from './pages';

const routes: Routes = [
    {
        path: '',
        component: MoviePageComponent,
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
