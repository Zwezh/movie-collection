import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    Input
} from '@angular/core';
import { IMovie } from '../../interfaces';

@Component({
    selector: 'mc-movie-edit-content',
    templateUrl: './movie-edit-content.component.html',
    styleUrls: ['./movie-edit-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieEditContentComponent implements OnInit {

    @Input() movie: IMovie;

    constructor() { }

    ngOnInit() {
    }

}
