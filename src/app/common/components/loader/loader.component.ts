import {
    ChangeDetectionStrategy,
    Component
} from '@angular/core';
import { Observable } from 'rxjs';

import { LoaderService } from './services/loader.service';

@Component({
    selector: 'mc-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent {

    loading: boolean;
    loading$: Observable<boolean>;

    constructor(
        loaderService: LoaderService
    ) {
        this.loading$ = loaderService.loading$;
    }
}
