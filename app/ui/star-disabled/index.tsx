import { memo } from 'react';
import { StarIcon } from '../icons';

const StarDisabled = memo(() => {
  return <StarIcon size={28} color="var(--mantine-color-gray-3)" />;
});

export default StarDisabled;
