import {
    ChangeDetectionStrategy,
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'mc-movie-rating',
    templateUrl: './movie-rating.component.html',
    styleUrls: ['./movie-rating.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieRatingComponent {

    @Input() rating: number;

    get ratingStarCollection(): Array<string> {
        const ratingCollection = new Array();
        const movieRating = this.ratingRound();
        const isHalfRating = movieRating % 1 !== 0;
        for (let i = 0; i < 10; i++) {
            ratingCollection.push(this.getRatingClass(movieRating, i, isHalfRating));
        }
        return ratingCollection;
    }

    private ratingRound(): number {
        const d = Math.floor(this.rating);
        const i = this.rating % d;
        return i < 0.25 ? d : (i < 0.75 ? d + 0.5 : d + 1);
    }

    private getRatingClass(movieRating: number, index: number, isHalfPart: boolean): string {
        let rating = 'las la-star';
        if (index >= movieRating) {
            rating = 'lar la-star';
        } else if (isHalfPart && Math.trunc(this.rating) === index) {
            rating = 'las la-star-half-alt';
        }
        return rating;
    }

}
