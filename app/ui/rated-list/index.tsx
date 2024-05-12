"use client";

import { ReactNode, memo } from "react";
import {
  Center,
  Container,
  Group,
  SimpleGrid,
  Title,
  rem,
} from "@mantine/core";

import MovieCard from "../movie-card";
import Paginator from "../paginator";
import useRated from "@/app/lib/hooks/use-rated";
import FieldSearch from "../field-search";

type RatedListPropsType = {
  children: ReactNode;
  page: string;
};

const RatedList = memo(({ children, page }: RatedListPropsType) => {
  const { empty, pages, movies } = useRated(Number(page));

  return empty ? (
    children
  ) : (
    <Container my={rem(40)} px="xmd" size={rem(1000)}>
      <Group justify="space-between" gap="md">
        <Title fz="xl">Rated movies</Title>
        <FieldSearch />
      </Group>

      <SimpleGrid cols={2} spacing="xlg" mt={rem(40)} mb="xxl">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </SimpleGrid>

      <Center>
        <Paginator total={pages} />
      </Center>
    </Container>
  );
});

export default RatedList;
