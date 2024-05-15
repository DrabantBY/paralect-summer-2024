import { notFound } from "next/navigation";
import { Breadcrumbs, Container, Stack, rem } from "@mantine/core";
import MovieCard from "@/app/ui/movie-card";
import MovieTrailer from "@/app/ui/movie-trailer";
import fetchMovieDetails from "@/app/lib/fetch/fetch-movie-details";
import type { MovieDetailsPageParamsType } from "@/app/types/page";

export default async function MovieDetailsPage({
  params,
}: {
  params: MovieDetailsPageParamsType;
}) {
  const data = await fetchMovieDetails(params.id);

  if (!data) {
    notFound();
  }

  const { card, video } = data;

  return (
    <Container my={rem(40)} px="xmd" size={rem(820)}>
      <Stack gap="xl">
        <Breadcrumbs c="purple.5" fz="xs" separatorMargin="xmd">
          Movies
          {card.original_title}
        </Breadcrumbs>

        <MovieCard movie={card} details={true} />

        <MovieTrailer {...video} />
      </Stack>
    </Container>
  );
}
