import {
    ChangeDetectionStrategy,
    Component
} from '@angular/core';

import { MovieActionsConstants } from '../../constants';

@Component({
    selector: 'mc-movie-actions',
    templateUrl: './movie-actions.component.html',
    styleUrls: ['./movie-actions.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieActionsComponent {

    search: string;
    filter: string;
    order: string;
    get filterList(): Array<string> {
        return MovieActionsConstants.FILTER;
    }
    get orderList(): Array<string> {
        return MovieActionsConstants.ORDER;
    }

}
