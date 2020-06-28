import {
    IWish,
    IWishesState
} from './interfaces';

export const initialWishesState: IWishesState = {
    wish: {
        wishGlobalKey: null,
        actors: '',
        country: '',
        description: '',
        director: '',
        duration: '',
        genre: '',
        id: null,
        originalName: '',
        rating: null,
        russianName: '',
        year: null
    },
    wishCollection: new Array<IWish>()
};