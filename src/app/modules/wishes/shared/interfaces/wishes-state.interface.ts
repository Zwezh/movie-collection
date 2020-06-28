import { IWish } from './wishes.interface';

export interface IWishesState {
    wish: IWish;
    wishCollection: Array<IWish>;
}