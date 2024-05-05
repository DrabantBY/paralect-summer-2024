import { Suspense } from 'react';
import { Container, Group, Title, rem } from '@mantine/core';
import MovieList from '../ui/movie-list';
import Paginator from '../ui/paginator';
import Spinner from '../ui/spinner';
import EmptyData from '../ui/empty-data';
import fetchGenres from '../lib/fetch/fetch-genres';
import fetchMovieList from '../lib/fetch/fetch-movie-list';
import type { MoviesPageSearchParamsType } from '../types/page';

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: MoviesPageSearchParamsType;
}) {
  const [genres, data] = await Promise.all([fetchGenres(), fetchMovieList(searchParams)]);

  if (!genres || !data) {
    return null;
  }

  const { results } = data;
  const suspenseKey = new URLSearchParams(searchParams);
  const isEmptyResults = results.length === 0;

  return (
    <Container my={rem(40)} px="xmd" size={rem(1000)}>
      <Title fz="xl">Movies</Title>
      <Suspense key={suspenseKey.toString()} fallback={<Spinner />}>
        {isEmptyResults ? (
          <EmptyData />
        ) : (
          <>
            <MovieList results={results} genres={genres} />
            <Group justify="flex-end" mt="xxl">
              <Paginator total={Number(process.env.totalPages)} />
            </Group>
          </>
        )}
      </Suspense>
    </Container>
  );
}
