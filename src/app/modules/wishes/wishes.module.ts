import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
    KinopoiskApiService,
    WishesApiService
} from '@appApi';
import { ListItemModule } from '@appComponents';
import { LoadingScreenInterceptor } from '@appInterceptors';
import { SharedModule } from '@appSharedModule';

import { WishesModelService } from './shared/services';
import { WishesStore } from './shared/wishes.store';

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
        },
        WishesModelService,
        WishesStore,
        WishesApiService,
        KinopoiskApiService
    ]
})
export class WishesModule { }
