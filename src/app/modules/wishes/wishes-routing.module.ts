import { NgModule } from '@angular/core';
import {
    RouterModule,
    Routes
} from '@angular/router';

import { WishesListPageComponent } from './pages';

const routes: Routes = [
    {
        path: '',
        component: WishesListPageComponent,
        pathMatch: 'full'
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
export class WishesRoutingModule { }
