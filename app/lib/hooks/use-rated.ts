import { useSearchParams, useRouter } from "next/navigation";
import type { MovieCardDatatype } from "@/app/types/data";

const useRated = () => {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page") ?? "1");

  const search = searchParams.get("search") ?? "";

  const { refresh, replace } = useRouter();

  const ratedMoviesLocal = localStorage.getItem("ratedMovies");

  const ratedMovies: MovieCardDatatype[] = ratedMoviesLocal
    ? JSON.parse(ratedMoviesLocal)
    : [];

  const foundMovies = ratedMovies.filter((movie) =>
    movie.original_title.toLowerCase().includes(search.toLowerCase())
  );

  const empty = ratedMovies.length === 0;

  const pages = Math.ceil(foundMovies.length / 4);

  let movies = foundMovies.slice((page - 1) * 4, page * 4);

  const navigate = () => {
    if (movies.length === 1 && searchParams.has("page")) {
      const newSearchParams = new URLSearchParams(searchParams);

      const newPage = Number(page) - 1;

      if (newPage === 0) {
        newSearchParams.delete("page");
      } else {
        newSearchParams.set("page", `${newPage}`);
      }

      replace(`/movies/rated?${newSearchParams.toString()}`);
    } else {
      refresh();
    }
  };

  return { empty, pages, movies, search, navigate };
};

export default useRated;
