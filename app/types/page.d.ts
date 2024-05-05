export type MoviesPageSearchParamsType = {
  page?: string;
  sort_by?: string;
  with_genres?: string;
  'vote_average.gte'?: string;
  'vote_average.lte'?: string;
  primary_release_year?: string;
};
