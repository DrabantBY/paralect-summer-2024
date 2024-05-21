import "server-only";

import formatMovieDetails from "../utils/format-movie-details";
import type { FetchMovieDetailsDataType } from "@/app/types/fetch";
import type { MovieDetailsPageDataType } from "@/app/types/page";

const fetchMovieDetails = async (
  id: number
): Promise<MovieDetailsPageDataType | null> => {
  const response = await fetch(
    `${process.env.baseUrl}/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US&append_to_response=videos`
  );

  if (!response.ok) {
    return null;
  }

  const data: FetchMovieDetailsDataType = await response.json();

  return formatMovieDetails(data);
};

export default fetchMovieDetails;
