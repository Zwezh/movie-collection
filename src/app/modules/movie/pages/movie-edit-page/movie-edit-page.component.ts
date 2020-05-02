import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesStore } from '@appLayouts/messages';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MovieResourcesConstants } from '../../constants';
import { MovieEditForm } from '../../shared/form';
import { IMovie } from '../../shared/interfaces';
import { MovieModelService } from '../../shared/services';

@Component({
    selector: 'mc-movie-edit-page',
    templateUrl: './movie-edit-page.component.html',
    styleUrls: ['./movie-edit-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class MovieEditPageComponent implements OnInit, OnDestroy {
    private _movieGlobalKey: string;
    private _destroy$: Subject<void>;
    private form: MovieEditForm;
    movie$: Observable<IMovie>;

    get isDisable(): boolean {
        return this.form.invalid || this.form.pristine;
    }

    constructor(
        private _modelService: MovieModelService,
        private _router: Router,
        private _messages: MessagesStore,
        private _translator: TranslateService,
        activatedRoute: ActivatedRoute) {
        this._destroy$ = new Subject();
        this.movie$ = _modelService.selectedMovie$;
        this.form = new MovieEditForm();
        this._movieGlobalKey = activatedRoute.snapshot.params.movieGlobalKey;

    }

    ngOnInit() {
        this._modelService.getSelectedMovie(this._movieGlobalKey).pipe(takeUntil(this._destroy$)).subscribe(() => {
            this.form.updateFormValues(this._modelService.selectedMovie);
        });
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    onSave(): void {
        const movie = { ...this._modelService.selectedMovie, ...this.form.value };
        this._modelService.updateMovie(movie).pipe(takeUntil(this._destroy$)).subscribe(() => {
            const url = MovieResourcesConstants.MOVIE_DETAILS_PAGE.replace(':movieGlobalKey', this._movieGlobalKey);
            this._router.navigateByUrl(url);
            this._messages.addSuccessMessage(this._translator.instant('savedSuccesss'))
        });

    }

    onCancel(): void {
        const url = MovieResourcesConstants.MOVIE_DETAILS_PAGE.replace(':movieGlobalKey', this._movieGlobalKey);
        this._router.navigateByUrl(url);
    }
}