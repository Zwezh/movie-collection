import {
    ChangeDetectionStrategy,
    Component,
    Input
} from '@angular/core';

@Component({
    selector: 'mc-movie-raiting',
    templateUrl: './movie-raiting.component.html',
    styleUrls: ['./movie-raiting.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieRaitingComponent {

    @Input() raiting: number;

    get raitingStarCollection(): Array<string> {
        const raitingCollection = new Array();
        const movieRaiting = this.raitingRound();
        const isHalfRaiting = movieRaiting % 1 !== 0;
        for (let i = 0; i < 10; i++) {
            raitingCollection.push(this.getRaitingClass(movieRaiting, i, isHalfRaiting));
        }
        return raitingCollection;
    }

    private raitingRound() {
        const d = Math.floor(this.raiting);
        const i = this.raiting % d;
        return i < 0.25 ? d : (i < 0.75 ? d + 0.5 : d + 1);
    }

    private getRaitingClass(movieRaiting: number, index: number, isHalfPart): string {
        let raiting = 'las la-star';
        if (index >= movieRaiting) {
            raiting = 'lar la-star';
        } else if (isHalfPart && Math.trunc(this.raiting) === index) {
            raiting = 'las la-star-half-alt';
        }
        return raiting;
    }

}
