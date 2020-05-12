import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { LoaderService } from '@appComponents';
import {
    LangChangeEvent,
    TranslateService
} from '@ngx-translate/core';
import { BehaviorSubject, Subscription } from 'rxjs';

import LanguagesConstants from './constants/translator.constants';

@Component({
    selector: 'mc-translator',
    templateUrl: './translator.component.html',
    styleUrls: ['./translator.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TranslatorComponent implements OnInit, OnDestroy {

    private _onChangeLanguageSubscriber: Subscription;

    get languages() {
        return LanguagesConstants
    }
    selectedLanguage$: BehaviorSubject<string>;

    constructor(
        private _translateService: TranslateService,
        private _loaderService: LoaderService) {
        this.initLanguage();
    }

    ngOnInit() {
        this._onChangeLanguageSubscriber = this._translateService.onLangChange.subscribe((lagChange: LangChangeEvent) => {
            this._loaderService.startLoading();
            this.selectedLanguage$.next(lagChange.lang);
            setTimeout(() => this._loaderService.stopLoading(), 500);
        })
    }

    ngOnDestroy() {
        this._onChangeLanguageSubscriber.unsubscribe();
    }

    toggleLanguage(languageCode: string): void {
        this._translateService.use(languageCode);
        window.localStorage.setItem('language', languageCode);
    }

    private initLanguage(): void {
        const savedLanguage = window.localStorage.getItem('language');
        this.selectedLanguage$ = new BehaviorSubject(this._translateService.getDefaultLang());
        if (savedLanguage) {
            this.selectedLanguage$.next(savedLanguage);
            this._translateService.use(savedLanguage);
        }
    }
}
