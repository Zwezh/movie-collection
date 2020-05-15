import {
    ChangeDetectionStrategy,
    Component,
    Input,
    ViewEncapsulation
} from '@angular/core';
import { KinopoiskDto } from '@appApi/kinopoisk/dto/kinopoisk.dto';
import { MessagesStore } from '@appLayouts/messages';
import { TranslateService } from '@ngx-translate/core';

import { MovieResourcesConstants } from '../../constants';
import { MovieForm } from '../../shared/form';
import { IMovie } from '../../shared/interfaces';
import { MovieModelService } from '../../shared/services';

@Component({
    selector: 'mc-movie-edit-content',
    templateUrl: './movie-edit-content.component.html',
    styleUrls: ['./movie-edit-content.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieEditContentComponent {

    @Input() movie: IMovie;
    @Input() form: MovieForm;

    get imageUrl(): string {
        return `${MovieResourcesConstants.GET_IMAGE}${this.movie.id}`;
    }

    get isDisableLoad(): boolean {
        return !this.form.id.value;
    }

    constructor(
        private _modelService: MovieModelService,
        private _messages: MessagesStore,
        private _translator: TranslateService
    ) {

    }

    onLoadFromKinopoisk(): void {
        this._modelService.loadMovieFromKinopoisk(this.form.id.value).subscribe((dto: KinopoiskDto) => {
            this.form.updateFormValuesFromKinopoisk(dto);
            this._messages.addSuccessMessage(this._translator.instant('loadKinopoiskSuccesss'));
        });
    }

    onLoadPoster(): void {
        this._modelService.loadPoster(this.form.id.value).subscribe(() => {
            this._messages.addSuccessMessage(this._translator.instant('loadKinopoiskSuccesss'));
        });
    }
}
