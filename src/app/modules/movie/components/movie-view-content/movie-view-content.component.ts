import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation
} from '@angular/core';

import { MovieResourcesConstants } from '../../constants';
import { IMovie } from '../../shared/interfaces';

@Component({
    selector: 'mc-movie-view-content',
    templateUrl: './movie-view-content.component.html',
    styleUrls: ['./movie-view-content.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieViewContentComponent {

    @Input() movie: IMovie;
    @Output('deleteMovie') onDeleteEvent: EventEmitter<void>;

    constructor() {
        this.onDeleteEvent = new EventEmitter<void>();
    }

    get imageUrl(): string {
        return `${MovieResourcesConstants.GET_IMAGE}${this.movie.id}`;
    }

    get movieListPage(): string {
        return MovieResourcesConstants.MOVIE_LIST_PAGE;
    }

    get movieEditPage(): string {
        return MovieResourcesConstants.MOVIE_EDIT_PAGE.replace(':movieGlobalKey', this.movie.movieGlobalKey);
    }

    onDelete(): void {
        this.onDeleteEvent.emit();
    }
}
