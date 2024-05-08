type MovieRating = {
  ratingId: number;
  ratingValue: number;
};

const checkMovie = (movie: MovieRating, id: number, value: number) => {
  if (movie.ratingId === id) {
    movie.ratingValue = value;
  }
  return movie;
};

const updMovie = (movies: MovieRating[], id: number, value: number) => {
  const newMovieList = movies.map((movie) => checkMovie(movie, id, value));
  return newMovieList;
};

const addMovie = (movies: MovieRating[], id: number, value: number) => {
  const newMovieList = [...movies, { ratingId: id, ratingValue: value }];
  return newMovieList;
};

const remMovie = (movies: MovieRating[], id: number) => {
  const newMovieList = movies.filter((movie) => movie.ratingId !== id);
  return newMovieList;
};

const formatStorage = (movies: MovieRating[], id: number, value: number) => {
  const isMovieExist = movies.some((movie) => movie.ratingId === id);

  let newMovieList: MovieRating[];

  switch (true) {
    case value > 0 && isMovieExist:
      newMovieList = updMovie(movies, id, value);
      break;

    case value > 0 && !isMovieExist:
      newMovieList = addMovie(movies, id, value);
      break;

    default:
      newMovieList = remMovie(movies, id);
    //   if (value === 0) {
    //     newMovieList = remMovie(movies, id);
    //   } else {
    //     if (isMovieExist) {
    //       newMovieList = updMovie(movies, id, value);
    //     } else {
    //       newMovieList = addMovie(movies, id, value);
    //     }
  }

  return newMovieList;
};

export default formatStorage;
