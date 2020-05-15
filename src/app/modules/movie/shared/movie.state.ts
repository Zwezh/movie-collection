import {
    IMovie,
    IMovieState
} from './interfaces';

export const initialMovieState: IMovieState = {
    movie: {
        movieGlobalKey: null,
        actors: '',
        country: '',
        description: '',
        director: '',
        duration: '',
        genre: '',
        id: null,
        more: '',
        originalName: '',
        quality: '',
        rating: null,
        russianName: '',
        translation: '',
        year: null
    },
    movieCollection: new Array<IMovie>()
}