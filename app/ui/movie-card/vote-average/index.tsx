import { MouseEventHandler, memo } from 'react';
import { ActionIcon, Group, NumberFormatter } from '@mantine/core';
import StarActivated from '../../star-activated';
import StarDisabled from '../../star-disabled';

type VoteAveragePropsType = {
  value: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const styles = {
  fontSize: 'var(--mantine-font-size-sm)',
  fontWeight: '600',
  color: 'var(--mantine-color-black)',
};

const VoteAverage = memo(({ value, onClick }: VoteAveragePropsType) => {
  return (
    <Group gap="xs" wrap="nowrap">
      <ActionIcon variant="transparent" onClick={onClick}>
        {value > 0 ? <StarActivated /> : <StarDisabled />}
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
