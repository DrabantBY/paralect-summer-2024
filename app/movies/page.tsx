import { Container, SimpleGrid, Title, rem } from '@mantine/core';
import MovieCard from '../ui/movie-card';
import fetchGenres from '../lib/fetch/fetch-genres';
import fetchMovieList from '../lib/fetch/fetch-movie-list';

export default async function MoviesPage() {
  const [genres, data] = await Promise.all([fetchGenres(), fetchMovieList()]);

  if (!genres || !data) {
    return null;
  }

  const { page, total_pages, results } = data;

  return (
    <Container mt={rem(40)} px="xmd" size={rem(1000)}>
      <Title fz="xl">Movies</Title>
      <SimpleGrid cols={2} spacing="xlg">
        {results.map((result) => (
          <MovieCard key={result.id} genres={genres} movie={result} />
        ))}
      </SimpleGrid>
    </Container>
  );
}
