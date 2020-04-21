import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter, Pipe } from '@angular/core';

import { IMovie } from '../../interfaces';

@Component({
    selector: 'movie-item',
    templateUrl: './movie-item.component.html',
    styleUrls: ['./movie-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieItemComponent {
    @Input() movie: IMovie;
    @Output('openViewDetails') openViewDetailsEvent: EventEmitter<void>;
    constructor() {
        this.openViewDetailsEvent = new EventEmitter<void>();
    }

    openViewDetails(): void {
        this.openViewDetailsEvent.emit();
    }
}
