import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';

import { LoaderService } from './services/loader.service';

@Component({
    selector: 'm-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit, OnDestroy {
    private _loadingSubscription: Subscription;

    public loading: boolean;

    constructor(
        private _changeDetector: ChangeDetectorRef,
        private _loaderService: LoaderService
    ) {
        this.loading = false;
    }

    ngOnInit() {
        this._loadingSubscription = this._loaderService.loadingStatus.subscribe((value) => {
            this.loading = value;
            this._changeDetector.detectChanges();
        });
    }

    ngOnDestroy() {
        this._loadingSubscription.unsubscribe();
    }
}
