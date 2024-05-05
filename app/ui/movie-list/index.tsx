import { memo } from 'react';
import { SimpleGrid } from '@mantine/core';
import MovieCard from '../movie-card';
import type { GenreDataType, MovieDataType } from '@/app/types/data';

type MovieListPropsType = {
  genres: GenreDataType[];
  results: MovieDataType[];
};

const MovieList = memo(async ({ results, genres }: MovieListPropsType) => {
  return (
    <SimpleGrid cols={2} spacing="xlg">
      {results.map((result) => (
        <MovieCard key={result.id} genres={genres} movie={result} />
      ))}
    </SimpleGrid>
  );
});

export default MovieList;
