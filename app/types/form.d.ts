export type FormFilterData = {
  page?: string;
  with_genres: string | null;
  primary_release_year: string | null;
  sort_by: string | null;
  'vote_average.gte': string | number;
  'vote_average.lte': string | number;
};
