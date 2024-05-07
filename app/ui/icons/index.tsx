import { rem } from '@mantine/core';
import { memo } from 'react';
import type { ComponentPropsWithoutRef } from 'react';

type IconPropsType = ComponentPropsWithoutRef<'svg'> & {
  size?: number | string;
};

export const StarIcon = memo(({ size, style, ...others }: IconPropsType) => {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}>
      <path
        d="M13.9999 20.7083L6.79926 24.4941L8.17476 16.4756L2.34143 10.7974L10.3914 9.63077L13.9918 2.3356L17.5921 9.63077L25.6421 10.7974L19.8088 16.4756L21.1843 24.4941L13.9999 20.7083Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});

export const LogoIcon = memo(({ size, style, ...others }: IconPropsType) => {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}>
      <path d="M26.6066 4.51472L17.0606 14.0607C16.4748 14.6464 15.5251 14.6464 14.9393 14.0607L5.39335 4.51472C4.80757 3.92893 4.80757 2.97918 5.39335 2.3934C5.97914 1.80761 6.92889 1.80761 7.51467 2.3934L14.5 9.37868L14.5 2C14.5 1.17157 15.1715 0.499999 16 0.499999C16.8284 0.499999 17.5 1.17157 17.5 2L17.5 9.37868L24.4852 2.3934C25.071 1.80761 26.0208 1.80761 26.6066 2.3934C27.1923 2.97918 27.1923 3.92893 26.6066 4.51472Z" />
      <path d="M5.39344 27.4853L14.9394 17.9393C15.5252 17.3536 16.4749 17.3536 17.0607 17.9393L26.6066 27.4853C27.1924 28.0711 27.1924 29.0208 26.6066 29.6066C26.0209 30.1924 25.0711 30.1924 24.4853 29.6066L17.5 22.6213L17.5 30C17.5 30.8284 16.8285 31.5 16 31.5C15.1716 31.5 14.5 30.8284 14.5 30L14.5 22.6213L7.51476 29.6066C6.92898 30.1924 5.97923 30.1924 5.39344 29.6066C4.80765 29.0208 4.80765 28.0711 5.39344 27.4853Z" />
      <path d="M27.4853 26.6066L17.9393 17.0606C17.3536 16.4748 17.3536 15.5251 17.9393 14.9393L27.4853 5.39335C28.0711 4.80757 29.0208 4.80757 29.6066 5.39335C30.1924 5.97914 30.1924 6.92889 29.6066 7.51467L22.6213 14.5L30 14.5C30.8284 14.5 31.5 15.1715 31.5 16C31.5 16.8284 30.8284 17.5 30 17.5L22.6213 17.5L29.6066 24.4852C30.1924 25.071 30.1924 26.0208 29.6066 26.6066C29.0208 27.1923 28.0711 27.1923 27.4853 26.6066Z" />
      <path d="M4.51472 5.39344L14.0607 14.9394C14.6464 15.5252 14.6464 16.4749 14.0607 17.0607L4.51472 26.6066C3.92893 27.1924 2.97918 27.1924 2.3934 26.6066C1.80761 26.0209 1.80761 25.0711 2.3934 24.4853L9.37868 17.5L2 17.5C1.17157 17.5 0.499999 16.8285 0.499999 16C0.499999 15.1716 1.17157 14.5 2 14.5L9.37868 14.5L2.3934 7.51476C1.80761 6.92898 1.80761 5.97923 2.3934 5.39344C2.97918 4.80765 3.92893 4.80766 4.51472 5.39344Z" />
    </svg>
  );
});

export const ArrowDownIcon = memo(({ size, style, ...others }: IconPropsType) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}>
      <path
        d="M3.33325 6L7.47929 9.55374C7.77888 9.81054 8.22096 9.81054 8.52055 9.55374L12.6666 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
});

export const ArrowUpIcon = memo(({ size, style, ...others }: IconPropsType) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}>
      <path
        d="M12.6667 10L8.52071 6.44626C8.22112 6.18946 7.77904 6.18946 7.47945 6.44626L3.33341 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
});

export const CloseIcon = memo(({ size, style, ...others }: IconPropsType) => {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: rem(size), height: rem(size), ...style }}
      {...others}>
      <path
        d="M12 4L4 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 4L12 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
