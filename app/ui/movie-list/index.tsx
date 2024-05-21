import { memo } from "react";
import { SimpleGrid } from "@mantine/core";
import MovieCard from "../movie-card";
import type { MovieCardDatatype } from "@/app/types/data";

type MovieListPropsType = {
  movies: MovieCardDatatype[];
};

const MovieList = memo(async ({ movies }: MovieListPropsType) => {
  return (
    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={{ base: "sm", sm: "xlg" }}>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} details={false} />
      ))}
    </SimpleGrid>
  );
});

export default MovieList;
