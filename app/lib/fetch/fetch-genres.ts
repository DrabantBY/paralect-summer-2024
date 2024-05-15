import "server-only";
import type { GenreDataType } from "@/app/types/data";
import type { FetchGenreListDataType } from "@/app/types/fetch";

const fetchGenres = async (): Promise<GenreDataType[] | null> => {
  const response = await fetch(
    `${process.env.baseUrl}/genre/movie/list?api_key=${process.env.TMDB_API_KEY}&language=en`
  );

  if (!response.ok) {
    return null;
  }

  const { genres }: FetchGenreListDataType = await response.json();

  return genres;
};

export default fetchGenres;
