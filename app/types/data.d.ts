export type MovieDataType = {
  id: number;
  vote_count: number;
  genre_ids: number[];
  poster_path: string | null;
  vote_average: number;
  release_date: string;
  original_title: string;
  title?: string;
  adult?: boolean;
  video?: boolean;
  overview?: string;
  popularity?: number;
  backdrop_path?: string;
  original_language?: string;
};

export type GenreDataType = {
  id: number;
  name: string;
};

export type CompanyProductionDataType = {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
};

export type CountryProductionDataType = {
  name: string;
  iso_3166_1: string;
};

export type LanguageDataType = {
  name: string;
  iso_639_1: string;
  english_name: string;
};

export type VideoDataType = {
  id: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  iso_639_1: string;
  iso_3166_1: string;
  published_at: string;
};

export type MovieDetailsDataType = Omit<MovieDataType, "genre_ids"> & {
  budget: number;
  revenue: number;
  runtime: number;
  genres: GenreDataType[];
  production_companies: CompanyProductionDataType[];
  videos: {
    results: VideoDataType[];
  };
  status?: string;
  imdb_id?: string;
  tagline?: string;
  homepage?: string;
  origin_country?: string[];
  belongs_to_collection?: null;
  spoken_languages?: LanguageDataType[];
  production_countries?: CountryProductionDataType[];
};

export type MovieCardDatatype = {
  id: number;
  genres: string;
  vote_count: number;
  poster_path: string;
  release_year: string;
  vote_average: number;
  release_date: string;
  original_title: string;
  rating?: number;
  release_date?: string;
  budget?: number;
  revenue?: number;
  runtime?: string;
};
