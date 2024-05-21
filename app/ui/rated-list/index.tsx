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
import FormSearch from "../form-search";

type RatedListPropsType = {
  children: ReactNode[];
};

const RatedList = memo(({ children }: RatedListPropsType) => {
  const { empty, pages, movies, search, navigate } = useRated();

  return empty ? (
    children[0]
  ) : (
    <Container my={{ base: "xmd", lg: rem(40) }} px="xmd" size={rem(1000)}>
      <Group justify="space-between" gap="md" mb={{ base: "lg", lg: rem(40) }}>
        <Title fz="xl">Rated movies</Title>
        <FormSearch defaultValue={search} />
      </Group>

      {movies.length === 0 ? (
        children[1]
      ) : (
        <SimpleGrid
          cols={{ base: 1, sm: 2 }}
          spacing={{ base: "sm", sm: "xlg" }}
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              details={false}
              handler={navigate}
            />
          ))}
        </SimpleGrid>
      )}
      <Center mt="xxl">
        <Paginator total={pages} />
      </Center>
    </Container>
  );
});

export default RatedList;
