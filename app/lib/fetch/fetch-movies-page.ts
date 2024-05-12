import fetchMovieList from "./fetch-movie-list";
import fetchGenres from "./fetch-genres";
import formatGenreData from "../utils/format-genre-data";
import formatMovies from "../utils/format-movies";
import type {
  MoviePageDataType,
  MoviesPageSearchParamsType,
} from "@/app/types/page";

const fetchMoviesPage = async (
  searchParams: MoviesPageSearchParamsType
): Promise<null | MoviePageDataType> => {
  const [genres, data] = await Promise.all([
    fetchGenres(),
    fetchMovieList(searchParams),
  ]);

  if (!genres || !data) {
    return null;
  }

  const isEmptyMovies = data.results.length === 0;

  const total = data.total_pages > 500 ? 500 : data.total_pages;

  const movies = isEmptyMovies ? [] : formatMovies(data.results, genres);

  const genreData = formatGenreData(genres);

  const yearsData = Array.from({ length: 25 }, (_, i) => `${2000 + i}`);

  return { movies, genreData, yearsData, isEmptyMovies, total };
};

export default fetchMoviesPage;
