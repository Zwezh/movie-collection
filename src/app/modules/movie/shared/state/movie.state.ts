import {
    IMovie,
    IMovieState
} from '../interfaces';

export const initialMovieState: IMovieState = {
    movie: {
        _id: null,
        actors: '',
        country: '',
        director: '',
        duration: '',
        genre: '',
        id: null,
        more: '',
        originalName: '',
        quality: '',
        raiting: null,
        russianName: '',
        translation: '',
        year: null
    },
    movieCollection: new Array<IMovie>()
}