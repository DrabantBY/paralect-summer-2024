import { memo } from 'react';
import { Group, Text } from '@mantine/core';

type CardDetailsPropsType = {
  genres: string;
};

const CardDetails = memo(({ genres }: CardDetailsPropsType) => {
  return (
    <Group align="flex-start" wrap="nowrap" gap="md">
      <Text size="sm" c="gray.6">
        Genres
      </Text>
      <Text size="sm" c="black">
        {genres}
      </Text>
    </Group>
  );
});

export default CardDetails;
