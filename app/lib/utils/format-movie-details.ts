import formatGenreIds from "./format-genre-ids";
import formatTime from "./format-time";
import type { MovieDetailsDataType } from "@/app/types/data";
import type { MovieDetailsPageDataType } from "@/app/types/page";

const formatMovieDetails = (
  movie: MovieDetailsDataType
): MovieDetailsPageDataType => {
  const {
    id,
    genres,
    poster_path,
    vote_count,
    vote_average,
    release_date,
    original_title,
    budget,
    revenue,
    runtime,
    overview,
    production_companies,
    videos,
  } = movie;

  const card = {
    id,
    vote_average,
    vote_count,
    original_title,
    budget,
    revenue,
    runtime: formatTime(runtime),
    genres: formatGenreIds(genres),
    release_year: release_date.slice(0, 4),
    release_date: new Date(release_date).toLocaleDateString("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    poster_path: `${process.env.baseImgUrl}/${process.env.posterLgWidth}${poster_path}`,
  };

  const description = overview ?? "";

  const production = production_companies;
  const trailer = videos.results[0];

  return { card, video: { description, production, trailer } };
};

export default formatMovieDetails;
