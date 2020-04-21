import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieModelService } from 'app/modules/movie/services';
import {
    Observable,
    Subject
} from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IMovie } from '../../../interfaces';

@Component({
    selector: 'movie-view-page',
    templateUrl: './movie-view-page.component.html',
    styleUrls: ['./movie-view-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieViewPageComponent implements OnInit, OnDestroy {

    private _destroy$: Subject<void>;
    movie: IMovie;
    movie$: Observable<IMovie>;

    constructor(
        private _modelService: MovieModelService,
        private _activatedRoute: ActivatedRoute) {
        this._destroy$ = new Subject();
        this.movie$ = _modelService.selectedMovie$;
    }

    ngOnInit() {
        const movieGlobalKey = this._activatedRoute.snapshot.params.movieGlobalKey;
        this._modelService.getSelectedMovie(movieGlobalKey).pipe(takeUntil(this._destroy$)).subscribe();
    }

    ngOnDestroy(): void {
        this._destroy$.next();
        this._destroy$.complete();
    }
}
