export type FormFilterData = {
  with_genres: string | null;
  'vote_average.gte': string;
  'vote_average.lte': string;
  primary_release_year: string | null;
};
