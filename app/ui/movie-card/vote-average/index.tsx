import { MouseEventHandler, ReactNode, memo } from 'react';
import { ActionIcon, Group, NumberFormatter } from '@mantine/core';
import { StarDisabled } from '../card-star';

type VoteAveragePropsType = {
  children: ReactNode;
  value: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const styles = {
  fontSize: 'var(--mantine-font-size-sm)',
  fontWeight: '600',
  color: 'var(--mantine-color-black)',
};

const VoteAverage = memo(({ children, value, onClick }: VoteAveragePropsType) => {
  return (
    <Group gap="xs" wrap="nowrap">
      <ActionIcon variant="transparent" onClick={onClick}>
        {value > 0 ? children : <StarDisabled />}
      </ActionIcon>
      {value === 0 ? null : (
        <NumberFormatter
          value={value}
          decimalScale={1}
          decimalSeparator="."
          style={styles}
        />
      )}
    </Group>
  );
});

export default VoteAverage;
