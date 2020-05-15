import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy
} from '@angular/core';
import { Router } from '@angular/router';
import { KinopoiskDto } from '@appApi/kinopoisk/dto/kinopoisk.dto';
import { MessagesStore } from '@appLayouts/messages';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MovieResourcesConstants } from '../../constants';
import { MovieForm } from '../../shared/form';
import { IMovie } from '../../shared/interfaces';
import { MovieModelService } from '../../shared/services';

@Component({
    templateUrl: './movie-create-page.component.html',
    styleUrls: ['./movie-create-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieCreatePageComponent implements OnDestroy {
    private _destroy$: Subject<void>;
    private form: MovieForm;
    movie$: Observable<IMovie>;

    get isDisable(): boolean {
        return this.form.invalid;
    }

    constructor(
        private _modelService: MovieModelService,
        private _router: Router,
        private _messages: MessagesStore,
        private _translator: TranslateService) {
        this._destroy$ = new Subject();
        this.movie$ = _modelService.selectedMovie$;
        this.form = new MovieForm();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    onSave(): void {
        this._modelService.createMovie(this.form.value).pipe(takeUntil(this._destroy$)).subscribe(() => {
            this._router.navigateByUrl(MovieResourcesConstants.MOVIE_LIST_PAGE);
            this._messages.addSuccessMessage(this._translator.instant('savedSuccesss'))
        });

    }

    onCancel(): void {
        this._router.navigateByUrl(MovieResourcesConstants.MOVIE_LIST_PAGE);
    }
}