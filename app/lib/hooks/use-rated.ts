import { useSearchParams } from "next/navigation";
import { useLocalStorage } from "@mantine/hooks";
import type { MovieCardDatatype } from "@/app/types/data";

const useRated = () => {
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page") ?? "1");
  const search = searchParams.get("search") ?? "";

  const [ratedMovies] = useLocalStorage<MovieCardDatatype[]>({
    key: "ratedMovies",
    defaultValue: [],
  });

  const foundMovies = ratedMovies.filter((movie) =>
    movie.original_title.toLowerCase().includes(search.toLowerCase())
  );

  const empty = ratedMovies.length === 0;

  const pages = Math.ceil(foundMovies.length / 4);

  let movies = foundMovies.slice((page - 1) * 4, page * 4);

  return { empty, pages, movies, search };
};

export default useRated;
