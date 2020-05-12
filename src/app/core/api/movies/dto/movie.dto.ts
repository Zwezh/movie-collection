import { CreateMovieDto } from './create-movie.dto';

export class MovieDto extends CreateMovieDto {
    movieGlobalKey: string;
}
