export type MoviesPageSearchParamsType = {
  page: number;
  sort_by: string;
  with_genres: string;
  'vote_average.gte': number;
  'vote_average.lte': number;
  primary_release_year: number;
};
