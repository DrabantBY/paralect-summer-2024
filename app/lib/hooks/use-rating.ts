import { MouseEventHandler, useState, useCallback, useMemo } from "react";
import formatStorage from "../utils/format-storage";
import type { MovieCardDatatype } from "@/app/types/data";

const useRating = (movie: MovieCardDatatype, handler?: () => void) => {
  const [opened, setOpened] = useState<boolean>(false);

  const ratedMoviesLocal = localStorage.getItem("ratedMovies");

  const ratedMovies: MovieCardDatatype[] = useMemo(() => {
    return ratedMoviesLocal ? JSON.parse(ratedMoviesLocal) : [];
  }, [ratedMoviesLocal]);

  const openRating: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    e.preventDefault();

    setOpened(true);
  }, []);

  const closeRating = useCallback(() => {
    setOpened(false);
  }, []);

  const rating =
    ratedMovies.find((value) => value.id === movie.id)?.rating ?? 0;

  const saveRating = useCallback(
    (value: number) => {
      const newMovieList = formatStorage(ratedMovies, movie, value);

      localStorage.setItem("ratedMovies", JSON.stringify(newMovieList));

      closeRating();

      if (newMovieList.length < ratedMovies.length && handler) {
        handler();
      }
    },
    [closeRating, handler, movie, ratedMovies]
  );

  return { opened, rating, saveRating, closeRating, openRating };
};

export default useRating;
