import { memo } from 'react';
import Link from 'next/link';
import { Paper, Text, Group, Stack } from '@mantine/core';
import VoteAverage from './vote-average';
import VoteCount from './vote-count';
import CardDetails from './card-details';
import CardImage from './card-image';
import CardHeader from './card-header';
import formatGenres from '@/app/lib/utils/format-genres';
import type { GenreDataType, MovieDataType } from '@/app/types/data';
import { StarActivated } from './card-star';

type MovieCardPropsType = {
  genres: GenreDataType[];
  movie: MovieDataType;
};

export const MovieCard = memo(({ genres, movie }: MovieCardPropsType) => {
  const genreNames = formatGenres(movie.genre_ids, genres);

  const src = `${process.env.baseImgUrl}/${process.env.posterSmWidth}${movie.poster_path}`;

  return (
    <Paper radius="lg" p="xxl" component={Link} href={`/movie/${movie.id}`}>
      <Group align="flex-start" wrap="nowrap" h="100%" gap="xlg">
        <CardImage src={src} />
        <Stack justify="space-between" h="100%" gap="sm" w="100%">
          <Stack gap="md">
            <CardHeader title={movie.original_title} id={movie.id} />
            <Text size="sm" c="gray.6">
              {movie.release_date.slice(0, 4)}
            </Text>
            <Group gap="md">
              <VoteAverage value={movie.vote_average}>
                <StarActivated />
              </VoteAverage>
              <VoteCount value={movie.vote_count} />
            </Group>
          </Stack>
          <CardDetails genres={genreNames} />
        </Stack>
      </Group>
    </Paper>
  );
});

export default MovieCard;
