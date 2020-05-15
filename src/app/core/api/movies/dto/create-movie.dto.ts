import { BaseDto } from '../../base.dto';
export class CreateMovieDto extends BaseDto {
    actors: string;
    country: string;
    director: string;
    more: string;
    quality: string;
    translation: string;
}
