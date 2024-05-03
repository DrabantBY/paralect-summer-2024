import type { GenreDataType, MovieDataType, MovieDetailsDataType } from './data';

export type FetchMovieListDataType = {
  page: number;
  total_pages: number;
  total_results: number;
  results: MovieDataType[];
};

export type FetchGenreListDataType = {
  genres: GenreDataType[];
};

export type FetchMovieDetailsDataType = MovieDetailsDataType;
