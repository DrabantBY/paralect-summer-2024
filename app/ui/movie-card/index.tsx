import { memo } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import {
  Paper,
  Title,
  Text,
  NumberFormatter,
  Group,
  Stack,
  Image,
  Box,
} from '@mantine/core';
import { StarIcon } from '../icons';
import formatNumber from '@/app/lib/utils/format-number';
import formatGenres from '@/app/lib/utils/format-genres';
import noposter from '@/public/noposter.png';
import type { GenreDataType, MovieDataType } from '@/app/types/data';

type MovieCardPropsType = {
  genres: GenreDataType[];
  movie: MovieDataType;
};

export const MovieCard = memo(({ genres, movie }: MovieCardPropsType) => {
  const voteCountProps = formatNumber(movie.vote_count);
  const genreNames = formatGenres(movie.genre_ids, genres);
  const src = `${process.env.baseImgUrl}/${process.env.posterSmWidth}${movie.poster_path}`;

  return (
    <Paper component={Link} href={`/movie/${movie.id}`} radius="lg" p="xxl">
      <Group align="flex-start" wrap="nowrap" h="100%" gap="xlg">
        <Box pos="relative" miw={120} h={170}>
          <Image
            component={NextImage}
            src={src}
            alt="Poster image"
            sizes="100%"
            fit="cover"
            fill
            fallbackSrc={noposter.src}
            priority
          />
        </Box>

        <Stack justify="space-between" h="100%" gap="sm">
          <Stack gap="md">
            <Title size="md" fw="600" c="purple.5">
              {movie.original_title}
            </Title>

            <Text size="sm" c="gray.6">
              {movie.release_date.slice(0, 4)}
            </Text>

            <Group gap={0}>
              <StarIcon color="var(--mantine-color-yellow-6)" size={28} />

              <NumberFormatter
                value={movie.vote_average}
                decimalScale={1}
                decimalSeparator="."
                style={{
                  marginInlineStart: 'var(--mantine-spacing-xs)',
                  marginInlineEnd: 'var(--mantine-spacing-md)',
                  fontSize: 'var(--mantine-font-size-sm)',
                  fontWeight: '600',
                  color: 'var(--mantine-color-black)',
                }}
              />

              <NumberFormatter
                {...voteCountProps}
                decimalScale={1}
                prefix="("
                decimalSeparator="."
                style={{
                  fontSize: 'var(--mantine-font-size-sm)',
                  color: 'var(--mantine-color-gray-6)',
                }}
              />
            </Group>
          </Stack>

          <Group align="flex-start" wrap="nowrap" gap="md">
            <Text size="sm" c="gray.6">
              Genres
            </Text>
            <Text size="sm" c="black">
              {genreNames}
            </Text>
          </Group>
        </Stack>
      </Group>
    </Paper>
  );
});

export default MovieCard;
