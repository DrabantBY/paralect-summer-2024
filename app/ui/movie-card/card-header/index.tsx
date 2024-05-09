import { memo } from 'react';
import { Group, Title } from '@mantine/core';
import CardModal from '../card-modal';
import type { MovieCardDatatype } from '@/app/types/data';

type CardHeaderPropsType = {
  movie: MovieCardDatatype;
};

const CardHeader = memo(({ movie }: CardHeaderPropsType) => {
  return (
    <Group align="flex-start" gap="xs" justify="space-between" wrap="nowrap">
      <Title size="md" fw="600" c="purple.5">
        {movie.original_title}
      </Title>

      <CardModal movie={movie} />
    </Group>
  );
});

export default CardHeader;
