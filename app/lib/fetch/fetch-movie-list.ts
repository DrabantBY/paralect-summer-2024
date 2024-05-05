import type { FetchMovieListDataType } from '@/app/types/fetch';

const fetchMovieList = async (): Promise<FetchMovieListDataType | null> => {
  const response = await fetch(
    `${process.env.baseUrl}/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US`
  );

  if (!response.ok) {
    return null;
  }

  const data: FetchMovieListDataType = await response.json();

  data.results = data.results.map(
    ({
      id,
      vote_count,
      genre_ids,
      poster_path,
      vote_average,
      release_date,
      original_title,
    }) => ({
      id,
      vote_count,
      genre_ids,
      poster_path,
      vote_average,
      release_date,
      original_title,
    })
  );

  return data;
};

export default fetchMovieList;
