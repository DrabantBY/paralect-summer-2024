import { MouseEventHandler, useState, useCallback, FormEvent } from 'react';
import { useLocalStorage } from '@mantine/hooks';
import formatStorage from '../utils/format-storage';

type MovieRating = {
  ratingId: number;
  ratingValue: number;
};

const useRating = (id: number) => {
  const [opened, setOpened] = useState(false);

  const [movies, setRating] = useLocalStorage<MovieRating[]>({
    key: 'ratedMovies',
    defaultValue: [],
  });

  const openRating: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    e.preventDefault();
    setOpened(true);
  }, []);

  const closeRating = useCallback(() => {
    setOpened(false);
  }, []);

  const currentRatingValue =
    movies.find((movie) => movie.ratingId === id)?.ratingValue ?? 0;

  const saveRating = useCallback(
    (value: number) => {
      const newMovieList = formatStorage(movies, id, value);
      setRating(newMovieList);
      closeRating();
    },
    [closeRating, setRating, id, movies]
  );

  return { opened, currentRatingValue, saveRating, closeRating, openRating };
};

export default useRating;
