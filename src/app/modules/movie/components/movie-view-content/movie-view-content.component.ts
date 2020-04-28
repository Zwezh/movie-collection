import {
    ChangeDetectionStrategy,
    Component,
    Input,
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

    @Input() movie: IMovie

    get imageUrl() {
        return `${MovieResourcesConstants.GET_IMAGE}${this.movie.id}`;
    }

    get raitingStarCollection(): Array<string> {
        const raitingCollection = new Array();
        const movieRaiting = this.raitingRound(this.movie.raiting);
        const isHalfRaiting = movieRaiting % 1 !== 0;
        for (let i = 0; i < 10; i++) {
            raitingCollection.push(this.getRaitingClass(movieRaiting, i, isHalfRaiting));
        }
        return raitingCollection;
    }

    get movieListPage(): string {
        return MovieResourcesConstants.MOVIE_LIST_PAGE;
    }

    get movieEditPage(): string {
        return MovieResourcesConstants.MOVIE_EDIT_PAGE.replace(':movieGlobalKey', this.movie.movieGlobalKey);
    }

    private raitingRound(raiting) {
        const d = Math.floor(raiting);
        const i = raiting % d;
        return i < 0.25 ? d : (i < 0.75 ? d + 0.5 : d + 1);
    }

    private getRaitingClass(movieRaiting: number, index: number, isHalfPart): string {
        let raiting = 'las la-star';
        if (index >= movieRaiting) {
            raiting = 'lar la-star';
        } else if (isHalfPart && Math.trunc(this.movie.raiting) === index) {
            raiting = 'las la-star-half-alt';
        }
        return raiting;
    }
}
