import {
    FormControl,
    FormGroup,
    Validators
} from '@angular/forms';

import { IMovie } from '../interfaces';

export class MovieEditForm extends FormGroup {

    get actors(): FormControl {
        return this.get('actors') as FormControl;
    }
    get country(): FormControl {
        return this.get('country') as FormControl;
    }
    get director(): FormControl {
        return this.get('director') as FormControl;
    }
    get duration(): FormControl {
        return this.get('duration') as FormControl;
    }
    get genre(): FormControl {
        return this.get('genre') as FormControl;
    }
    get id(): FormControl {
        return this.get('id') as FormControl;
    }
    get more(): FormControl {
        return this.get('more') as FormControl;
    }
    get originalName(): FormControl {
        return this.get('originalName') as FormControl;
    }
    get quality(): FormControl {
        return this.get('quality') as FormControl;
    }
    get raiting(): FormControl {
        return this.get('raiting') as FormControl;
    }
    get russianName(): FormControl {
        return this.get('russianName') as FormControl;
    }
    get translation(): FormControl {
        return this.get('translation') as FormControl;
    }
    get year(): FormControl {
        return this.get('year') as FormControl;
    }

    constructor() {
        super({
            actors: new FormControl('', Validators.required),
            country: new FormControl('', Validators.required),
            director: new FormControl('', Validators.required),
            duration: new FormControl('', Validators.required),
            genre: new FormControl('', Validators.required),
            id: new FormControl('', Validators.required),
            more: new FormControl('', Validators.required),
            originalName: new FormControl('', Validators.required),
            quality: new FormControl('', Validators.required),
            raiting: new FormControl('', Validators.required),
            russianName: new FormControl('', Validators.required),
            translation: new FormControl('', Validators.required),
            year: new FormControl('', Validators.compose([Validators.required, Validators.minLength(4)]))
        });
    }

    updateFormValues(movie: IMovie): void {
        this.setValue(
            {
                actors: movie.actors,
                country: movie.country,
                director: movie.director,
                duration: movie.duration,
                genre: movie.genre,
                id: movie.id,
                more: movie.more,
                originalName: movie.originalName,
                quality: movie.quality,
                raiting: movie.raiting,
                russianName: movie.russianName,
                translation: movie.translation,
                year: movie.year
            },
            {
                emitEvent: true
            }
        );
    }
}