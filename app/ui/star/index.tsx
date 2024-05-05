import { rem } from '@mantine/core';
import { ComponentPropsWithoutRef, memo } from 'react';

type logoIconPropsType = ComponentPropsWithoutRef<'svg'> & {
  size?: number | string;
};

const StarIcon = memo(({ size, style, ...others }: logoIconPropsType) => {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}>
      <path d="M13.9999 20.7083L6.79926 24.4941L8.17476 16.4756L2.34143 10.7974L10.3914 9.63077L13.9918 2.3356L17.5921 9.63077L25.6421 10.7974L19.8088 16.4756L21.1843 24.4941L13.9999 20.7083Z" />
    </svg>
  );
});

export default StarIcon;
