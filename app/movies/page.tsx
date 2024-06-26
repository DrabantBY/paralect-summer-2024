import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container, Group, Title, rem } from "@mantine/core";
import MovieList from "../ui/movie-list";
import Paginator from "../ui/paginator";
import Spinner from "../ui/spinner";
import EmptyData from "../ui/empty/empty-data";
import FormFilter from "../ui/form-filter";
import fetchMoviesPage from "../lib/fetch/fetch-movies-page";
import type { MoviesPageSearchParamsType } from "../types/page";

export const metadata: Metadata = {
  title: "page | movies",
  description: "",
};

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: MoviesPageSearchParamsType;
}) {
  const data = await fetchMoviesPage(searchParams);

  if (!data) {
    notFound();
  }

  const { movies, genreData, yearsData, sortData, isEmptyMovies, total } = data;

  const suspenseKey = new URLSearchParams(searchParams);

  return (
    <Container my={{ base: "xmd", lg: rem(40) }} px="xmd" size={rem(1000)}>
      <Title fz="xl">Movies</Title>
      <FormFilter
        genres={genreData}
        years={yearsData}
        sort={sortData}
        searchParams={searchParams}
      />
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
