import { IMovie } from './movie.interface';

export interface IMovieState {
    movie: IMovie
    movieCollection: Array<IMovie>;
}