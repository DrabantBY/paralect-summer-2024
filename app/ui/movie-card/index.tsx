import { memo } from 'react';
import Link from 'next/link';
import { Paper, Text, Group, Stack } from '@mantine/core';
import VoteAverage from './vote-average';
import VoteCount from './vote-count';
import CardDetails from './card-details';
import CardImage from './card-image';
import CardHeader from './card-header';
import { StarActivated } from './card-star';
import type { MovieCardDatatype } from '@/app/types/data';

type MovieCardPropsType = {
  movie: MovieCardDatatype;
};

export const MovieCard = memo(({ movie }: MovieCardPropsType) => {
  return (
    <Paper radius="lg" p="xxl" component={Link} href={`/movies/${movie.id}`}>
      <Group align="flex-start" wrap="nowrap" h="100%" gap="xlg">
        <CardImage src={movie.poster_path} />

        <Stack justify="space-between" h="100%" gap="sm" w="100%">
          <Stack gap="md">
            <CardHeader movie={movie} />

            <Text size="sm" c="gray.6">
              {movie.release_year}
            </Text>

            <Group gap="md">
              <VoteAverage value={movie.vote_average}>
                <StarActivated />
              </VoteAverage>

              <VoteCount value={movie.vote_count} />
            </Group>
          </Stack>

          <CardDetails genres={movie.genres} />
        </Stack>
      </Group>
    </Paper>
  );
});

export default MovieCard;
