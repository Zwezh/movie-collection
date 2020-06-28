import { CreateWishDto } from './create-wish.dto';

export class WishDto extends CreateWishDto {
    wishGlobalKey: string;
}
