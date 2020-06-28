import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IWish } from '../../shared/interfaces';
import { WishesModelService } from '../../shared/services';

@Component({
    selector: 'mc-wishes-list-page',
    templateUrl: './wishes-list-page.component.html',
    styleUrls: ['./wishes-list-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WishesListPageComponent implements OnInit, OnDestroy {


    private _destroy$: Subject<void>;

    search: string;
    wishCollection$: Observable<Array<IWish>>;
    isHasItems: boolean;

    constructor(
        private _modelService: WishesModelService
    ) {
        this.search = '';
        this.wishCollection$ = _modelService.wishCollection;
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
