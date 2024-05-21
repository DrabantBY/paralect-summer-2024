import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs, Container, Flex, rem } from "@mantine/core";
import MovieCard from "@/app/ui/movie-card";
import MovieTrailer from "@/app/ui/movie-trailer";
import fetchMovieDetails from "@/app/lib/fetch/fetch-movie-details";
import type { MovieDetailsPageParamsType } from "@/app/types/page";

export async function generateMetadata({
  params,
}: {
  params: { id: number };
}): Promise<Metadata> {
  return {
    title: `page | movie ${params.id}`,
  };
}

export default async function MovieDetailsPage({
  params,
}: {
  params: MovieDetailsPageParamsType;
}) {
  const data = await fetchMovieDetails(params.id);

  if (!data) {
    notFound();
  }

  const { card, video, isVideoExist } = data;

  return (
    <Container my={{ base: "xmd", lg: rem(40) }} px="xmd" size={rem(820)}>
      <Flex gap={{ base: "md", sm: "xl" }} direction="column">
        <Breadcrumbs c="purple.5" fz="xs" separatorMargin="xmd">
          Movies
          {card.original_title}
        </Breadcrumbs>

        <MovieCard movie={card} details={true} />

        {isVideoExist ? <MovieTrailer {...video} /> : null}
      </Flex>
    </Container>
  );
}
