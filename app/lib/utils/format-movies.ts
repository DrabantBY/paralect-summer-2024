import formatGenreIds from './format-genre-ids';
import type { GenreDataType, MovieCardDatatype, MovieDataType } from '@/app/types/data';

const formatMovies = (
  movies: MovieDataType[],
  genres: GenreDataType[]
): MovieCardDatatype[] => {
  return movies.map((movie) => ({
    id: movie.id,
    genres: formatGenreIds(movie.genre_ids, genres),
    vote_count: movie.vote_count,
    poster_path: `${process.env.baseImgUrl}/${process.env.posterSmWidth}${movie.poster_path}`,
    vote_average: movie.vote_average,
    release_year: movie.release_date.slice(0, 4),
    original_title: movie.original_title,
  }));
};

export default formatMovies;
