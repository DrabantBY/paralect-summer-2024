import { Suspense } from 'react';
import { Container, Group, Title, rem } from '@mantine/core';
import MovieList from '../ui/movie-list';
import Paginator from '../ui/paginator';
import Spinner from '../ui/spinner';
import EmptyData from '../ui/empty-data';
import FormFilter from '../ui/form-filter';
import fetchMoviesPage from '../lib/fetch/fetch-movies-page';
import type { MoviesPageSearchParamsType } from '../types/page';

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: MoviesPageSearchParamsType;
}) {
  const data = await fetchMoviesPage(searchParams);

  if (!data) {
    return null;
  }

  const { movies, genreData, yearsData, isEmptyMovies, total } = data;

  const suspenseKey = new URLSearchParams(searchParams);

  return (
    <Container my={rem(40)} px="xmd" size={rem(1000)}>
      <Title fz="xl">Movies</Title>
      <FormFilter genres={genreData} years={yearsData} searchParams={searchParams} />
      <Suspense key={suspenseKey.toString()} fallback={<Spinner />}>
        {isEmptyMovies ? (
          <EmptyData />
        ) : (
          <>
            <MovieList movies={movies} />
            <Group justify="flex-end" mt="xxl">
              <Paginator total={total} />
            </Group>
          </>
        )}
      </Suspense>
    </Container>
  );
}
