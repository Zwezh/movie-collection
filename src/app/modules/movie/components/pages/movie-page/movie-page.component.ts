import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IMovie } from '../../../interfaces';
import { MovieModelService } from '../../../services';
import { FADE_IN_CONTENT_BY_OPACITY } from 'app/common/constants';

@Component({
    selector: 'movie-page',
    templateUrl: './movie-page.component.html',
    styleUrls: ['./movie-page.component.scss'],
    animations: [FADE_IN_CONTENT_BY_OPACITY],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoviePageComponent implements OnInit, OnDestroy {

    private _destroy$: Subject<void>;

    search: string;
    movieList$: Observable<Array<IMovie>>;
    isHasItems: boolean;
    
    constructor(
        private _cd: ChangeDetectorRef,
        private _movieService: MovieModelService
    ) {
        this.search = '';
        this.movieList$ = _movieService.movieList;
        this._destroy$ = new Subject();
        this.isHasItems = false
    }

    ngOnInit(): void {

        this._movieService.getMovieCollection().pipe(takeUntil(this._destroy$)).subscribe();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }

    onOpenMovieViewMode(): void {
    }
}