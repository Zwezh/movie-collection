import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ListItemModule } from '@appComponents';
import { LoadingScreenInterceptor } from '@appInterceptors';
import { SharedModule } from '@appSharedModule';

import { WishesItemComponent } from './components';
import { WishesListPageComponent } from './pages';
import { WishesRoutingModule } from './wishes-routing.module';

const COMPONENTS = [
    WishesListPageComponent,
    WishesItemComponent
];

@NgModule({
    imports: [
        CommonModule,
        WishesRoutingModule,
        ListItemModule,
        SharedModule

    ],
    declarations: [...COMPONENTS],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingScreenInterceptor,
            multi: true
        }
    ]
})
export class WishesModule { }
