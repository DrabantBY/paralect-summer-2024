import type {
  CompanyProductionDataType,
  MovieCardDatatype,
  VideoDataType,
} from "./data";

export type MoviesPageSearchParamsType = {
  page?: string;
  sort_by?: string;
  with_genres?: string;
  "vote_average.gte"?: string;
  "vote_average.lte"?: string;
  primary_release_year?: string;
};

export type MovieDetailsPageParamsType = {
  id: number;
};

export type MoviePageDataType = {
  movies: MovieCardDatatype[];
  genreData: { value: string; label: string }[];
  sortData: { value: string; label: string }[];
  yearsData: string[];
  isEmptyMovies: boolean;
  total: number;
};

export type MovieDetailsPageDataType = {
  card: MovieCardDatatype;
  video: {
    trailer?: VideoDataType;
    production: CompanyProductionDataType[];
    description: string;
  };

  isVideoExist: boolean;
};

export type RatedPageSearchParamsType = {
  page?: string;
  search?: string;
};
