import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

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

    private _destroy$: Subject<void>;
    private form: MovieEditForm;
    movie$: Observable<IMovie>;

    constructor(
        private _modelService: MovieModelService,
        private _activatedRoute: ActivatedRoute) {
        this._destroy$ = new Subject();
        this.movie$ = _modelService.selectedMovie$;
        this.form = new MovieEditForm();
    }

    ngOnInit() {
        const movieGlobalKey = this._activatedRoute.snapshot.params.movieGlobalKey;
        this._modelService.getSelectedMovie(movieGlobalKey).pipe(takeUntil(this._destroy$)).subscribe();
        this.movie$.subscribe((movie: IMovie) => {
            this.form.updateFormValues(movie);
        })
    }

    ngOnDestroy(): void {
        this._modelService.setInitalState();
        this._destroy$.next();
        this._destroy$.complete();
    }
}