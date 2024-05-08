import { memo } from 'react';
import { StarIcon } from '../../icons';

export const StarActivated = memo(() => {
  return <StarIcon size={28} color="var(--mantine-color-yellow-6)" />;
});

export const StarDisabled = memo(() => {
  return <StarIcon size={28} color="var(--mantine-color-gray-3)" />;
});

export const StarRated = memo(() => {
  return <StarIcon size={28} color="var(--mantine-color-purple-5)" />;
});
