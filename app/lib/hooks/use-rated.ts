import { useLocalStorage } from "@mantine/hooks";
import type { MovieCardDatatype } from "@/app/types/data";

const useRated = (page: number) => {
  const [ratedMovies] = useLocalStorage<MovieCardDatatype[]>({
    key: "ratedMovies",
    defaultValue: [],
  });

  const empty = ratedMovies.length === 0;
  const pages = Math.ceil(ratedMovies.length / 4);
  const movies = ratedMovies.slice((page - 1) * 4, page * 4);

  return { empty, pages, movies };
};

export default useRated;
