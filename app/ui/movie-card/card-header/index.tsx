import { memo } from 'react';
import { Group, Title } from '@mantine/core';
import CardModal from '../card-modal';

type CardHeaderPropsType = {
  title: string;
  id: number;
};

const CardHeader = memo(({ title, id }: CardHeaderPropsType) => {
  return (
    <Group align="flex-start" gap="xs" justify="space-between" wrap="nowrap">
      <Title size="md" fw="600" c="purple.5">
        {title}
      </Title>
      <CardModal title={title} id={id} />
    </Group>
  );
});

export default CardHeader;
