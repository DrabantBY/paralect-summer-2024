import { MouseEventHandler, useState, useCallback } from 'react';
import { useLocalStorage } from '@mantine/hooks';

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

  const ratingValue = movies[0] ?? 0;

  const openRating: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    e.preventDefault();
    setOpened(true);
  }, []);

  const closeRating = useCallback(() => {
    setOpened(false);
  }, []);

  const saveRating = useCallback(
    (value: number) => {
      console.log('new rating', value);
      setRating([value]);
      closeRating();
    },
    [closeRating, setRating]
  );

  return { opened, ratingValue, saveRating, closeRating, openRating };
};

export default useRating;
