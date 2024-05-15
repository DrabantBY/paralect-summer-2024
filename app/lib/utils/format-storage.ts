import type { MovieCardDatatype } from "@/app/types/data";

const checkMovie = (movie: MovieCardDatatype, id: number, rating: number) => {
  if (movie.id === id) {
    return { ...movie, rating };
  }

  return movie;
};

const updMovie = (movies: MovieCardDatatype[], id: number, rating: number) => {
  const newMovieList = movies.map((movie) => checkMovie(movie, id, rating));

  return newMovieList;
};

const addMovie = (
  movies: MovieCardDatatype[],
  currentMovie: MovieCardDatatype,
  rating: number
) => {
  const newMovie = { ...currentMovie, rating };

  if ("budget" in newMovie) {
    delete newMovie.budget;
  }
  if ("revenue" in newMovie) {
    delete newMovie.revenue;
  }
  if ("runtime" in newMovie) {
    delete newMovie.runtime;
  }
  if ("release_date" in newMovie) {
    delete newMovie.release_date;
  }

  const newMovieList = [...movies, newMovie];

  return newMovieList;
};

const remMovie = (movies: MovieCardDatatype[], id: number) => {
  const newMovieList = movies.filter((movie) => movie.id !== id);

  return newMovieList;
};

const formatStorage = (
  movies: MovieCardDatatype[],
  currentMovie: MovieCardDatatype,
  rating: number
) => {
  const isMovieExist = movies.some((movie) => movie.id === currentMovie.id);

  let newMovieList: MovieCardDatatype[];

  switch (true) {
    case rating > 0 && isMovieExist:
      newMovieList = updMovie(movies, currentMovie.id, rating);
      break;

    case rating > 0 && !isMovieExist:
      newMovieList = addMovie(movies, currentMovie, rating);
      break;

    case rating === 0 && isMovieExist:
      newMovieList = remMovie(movies, currentMovie.id);
      break;

    default:
      return movies;
  }

  return newMovieList;
};

export default formatStorage;
