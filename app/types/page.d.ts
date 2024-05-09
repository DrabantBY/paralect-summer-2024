import { MovieCardDatatype } from './data';

export type MoviesPageSearchParamsType = {
  page?: string;
  sort_by?: string;
  with_genres?: string;
  'vote_average.gte'?: string;
  'vote_average.lte'?: string;
  primary_release_year?: string;
};

export type MoviePageDataType = {
  movies: MovieCardDatatype[];
  genreData: { value: string; label: string }[];
  yearsData: string[];
  isEmptyMovies: boolean;
};
