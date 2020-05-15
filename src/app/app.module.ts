import {
    HttpClient,
    HttpClientModule
} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivityPanelModule } from '@appLayouts/activity-panel';
import { AppHeaderModule } from '@appLayouts/app-header';
import { MessagesModule } from '@appLayouts/messages';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { LoaderModule } from './core/components/loader';
import { SharedModule } from './core/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        LoaderModule,
        ActivityPanelModule,
        AppHeaderModule,
        MessagesModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
