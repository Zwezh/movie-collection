import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import {
    MoviePageComponent,
    MovieViewPageComponent
} from './components';

const routes: Routes = [
    {
        path: '',
        component: MoviePageComponent,
        pathMatch: 'full'
    },
    {
        path: ':movieGlobalKey',
        component: MovieViewPageComponent
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
