import { memo } from 'react';
import { StarIcon } from '../icons';

const StarActivated = memo(() => {
  return <StarIcon size={28} color="var(--mantine-color-yellow-6)" />;
});

export default StarActivated;
