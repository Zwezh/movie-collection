import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovie } from 'app/modules/movie/interfaces';
import { MovieModelService } from 'app/modules/movie/services';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'mc-movie-edit-page',
    templateUrl: './movie-edit-page.component.html',
    styleUrls: ['./movie-edit-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class MovieEditPageComponent implements OnInit, OnDestroy {

    private _destroy$: Subject<void>;
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
        this._modelService.setInitalState();
        this._destroy$.next();
        this._destroy$.complete();
    }
}