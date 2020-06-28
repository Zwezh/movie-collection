import { BaseDto } from '../../base.dto';
export class CreateWishDto extends BaseDto {
    actors: string;
    country: string;
    director: string;
}
