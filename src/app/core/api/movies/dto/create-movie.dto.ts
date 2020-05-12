import { BaseDto } from '../../base.dto';
export class CreateMovieDto extends BaseDto {
    more: string;
    quality: string;
    translation: string;
}
