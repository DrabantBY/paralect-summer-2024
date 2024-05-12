import { MouseEventHandler, useState, useCallback } from "react";
import { useLocalStorage } from "@mantine/hooks";
import formatStorage from "../utils/format-storage";
import type { MovieCardDatatype } from "@/app/types/data";

const useRating = (movie: MovieCardDatatype) => {
  const [opened, setOpened] = useState(false);

  const [ratedMovies, setRatedMovies] = useLocalStorage<MovieCardDatatype[]>({
    key: "ratedMovies",
    defaultValue: [],
  });

  const openRating: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    e.preventDefault();

    setOpened(true);
  }, []);

  const closeRating = useCallback(() => {
    setOpened(false);
  }, []);

  const rating =
    ratedMovies.find((rateMovie) => rateMovie.id === movie.id)?.rating ?? 0;

  const saveRating = useCallback(
    (value: number) => {
      const newMovieList = formatStorage(ratedMovies, movie, value);

      setRatedMovies(newMovieList);

      closeRating();
    },
    [closeRating, movie, ratedMovies, setRatedMovies]
  );

  return { opened, rating, saveRating, closeRating, openRating };
};

export default useRating;
