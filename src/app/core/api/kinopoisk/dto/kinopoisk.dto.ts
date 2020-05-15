import { BaseDto } from '@appApi/base.dto';

export class KinopoiskDto extends BaseDto {
    actors: Array<string>;
    country: Array<string>;
    director: Array<string>;
}