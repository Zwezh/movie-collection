import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { FADE_IN_CONTENT_BY_OPACITY } from '@appConstants';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IMovie } from '../../shared/interfaces';
import { MovieModelService } from '../../shared/services';

@Component({
    selector: 'mc-movie-list-page',
    templateUrl: './movie-list-page.component.html',
    styleUrls: ['./movie-list-page.component.scss'],
    animations: [FADE_IN_CONTENT_BY_OPACITY],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieListPageComponent implements OnInit, OnDestroy {

    private _destroy$: Subject<void>;

    search: string;
    movieList$: Observable<Array<IMovie>>;
    isHasItems: boolean;

    constructor(
        private _modelService: MovieModelService
    ) {
        this.search = '';
        this.movieList$ = _modelService.movieList;
        this._destroy$ = new Subject();
        this.isHasItems = false;
    }

    ngOnInit(): void {
        this._modelService.getMovieCollection().pipe(takeUntil(this._destroy$)).subscribe();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }
}