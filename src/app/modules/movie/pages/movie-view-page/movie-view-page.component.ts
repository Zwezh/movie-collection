import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    Observable,
    Subject
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MovieResourcesConstants } from '../../constants';
import { IMovie } from '../../shared/interfaces';
import { MovieModelService } from '../../shared/services';
import { MessagesStore } from '@appLayouts/messages';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'mc-movie-view-page',
    templateUrl: './movie-view-page.component.html',
    styleUrls: ['./movie-view-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieViewPageComponent implements OnInit, OnDestroy {

    private _movieGlobalKey: string;
    private _destroy$: Subject<void>;
    movie$: Observable<IMovie>;

    constructor(
        private _modelService: MovieModelService,
        private _activatedRoute: ActivatedRoute,
        private _messages: MessagesStore,
        private _translator: TranslateService,
        private _router: Router) {
        this._destroy$ = new Subject();
        this.movie$ = _modelService.selectedMovie$;
        this._movieGlobalKey = this._activatedRoute.snapshot.params.movieGlobalKey;
    }

    ngOnInit(): void {
        this._modelService.getSelectedMovie(this._movieGlobalKey).pipe(takeUntil(this._destroy$)).subscribe();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    onDelete(): void {
        this._modelService.deleteMovie(this._movieGlobalKey).pipe(takeUntil(this._destroy$)).subscribe(() => {
            this._router.navigate([MovieResourcesConstants.MOVIE_LIST_PAGE]);
            this._messages.addSuccessMessage(this._translator.instant('deletedSuccesss'));
        });
    }
}
