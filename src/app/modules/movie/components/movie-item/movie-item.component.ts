import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation
} from '@angular/core';

import { IMovie } from '../../shared/interfaces';

@Component({
    selector: 'mc-movie-item',
    templateUrl: './movie-item.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieItemComponent {
    @Input() movie: IMovie;
}
