import { memo } from 'react';
import { NumberFormatter } from '@mantine/core';
import formatNumber from '@/app/lib/utils/format-number';

type VoteCountPropsType = {
  value: number;
};

const styles = {
  fontSize: 'var(--mantine-font-size-sm)',
  color: 'var(--mantine-color-gray-6)',
};

const VoteCount = memo(({ value }: VoteCountPropsType) => {
  const props = formatNumber(value);

  return (
    <NumberFormatter
      {...props}
      decimalScale={1}
      prefix="("
      decimalSeparator="."
      style={styles}
    />
  );
});

export default VoteCount;
