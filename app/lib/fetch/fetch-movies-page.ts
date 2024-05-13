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
): Promise<MoviePageDataType | null> => {
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

  const sortData = [
    { value: "popularity.desc", label: "Most popular" },
    { value: "popularity.asc", label: "Least popular" },
    { value: "vote_average.desc", label: "Most rated" },
    { value: "vote_average.asc", label: "Least rated" },
    { value: "vote_count.desc", label: "Most voted" },
    { value: "vote_count.asc", label: "Least voted" },
  ];

  return { movies, genreData, yearsData, sortData, isEmptyMovies, total };
};

export default fetchMoviesPage;
