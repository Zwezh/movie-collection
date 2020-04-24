import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MovieApiConstants } from '../../constants';
import { IMovie } from '../../shared/interfaces';

@Component({
    selector: 'mc-movie-edit-content',
    templateUrl: './movie-edit-content.component.html',
    styleUrls: ['./movie-edit-content.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieEditContentComponent {

    @Input() movie: IMovie;
    @Input() form: FormGroup = null;

    get imageUrl() {
        return `${MovieApiConstants.GET_IMAGE}${this.movie.id}`;
    }

}
