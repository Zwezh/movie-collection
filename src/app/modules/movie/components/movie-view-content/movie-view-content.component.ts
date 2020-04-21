import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation
} from '@angular/core';

import { IMovie } from '../../interfaces';

@Component({
    selector: 'movie-view-content',
    templateUrl: './movie-view-content.component.html',
    styleUrls: ['./movie-view-content.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieViewContentComponent {

    @Input() movie: IMovie


}
