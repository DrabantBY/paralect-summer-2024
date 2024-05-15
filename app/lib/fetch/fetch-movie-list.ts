import "server-only";
import formatParams from "../utils/format-params";
import type { FetchMovieListDataType } from "@/app/types/fetch";
import type { MoviesPageSearchParamsType } from "@/app/types/page";

const fetchMovieList = async (
  searchParams: MoviesPageSearchParamsType
): Promise<FetchMovieListDataType | null> => {
  const urlSearchParams = formatParams(searchParams);

  const response = await fetch(
    `${process.env.baseUrl}/discover/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&${urlSearchParams}`
  );

  if (!response.ok) {
    return null;
  }

  const data: FetchMovieListDataType = await response.json();

  return data;
};

export default fetchMovieList;
