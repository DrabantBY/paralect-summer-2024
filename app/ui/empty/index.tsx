import { memo } from 'react';
import NextImage, { StaticImageData } from 'next/image';
import { Stack, Image, Text } from '@mantine/core';
import BtnLink from '../btn-link';

type EmptyPropsType = {
  src: StaticImageData;
  message: string;
  label?: string;
};

const Empty = memo(({ src, message, label }: EmptyPropsType) => {
  return (
    <Stack className="center" align="center">
      <Image component={NextImage} src={src} alt="Not found image" priority />
      <Text fw="600" size="md" mt={message.includes('page') ? 'xl' : 0} ta="center">
        {message}
      </Text>
      {label ? <BtnLink label={label} href="/movies" /> : null}
    </Stack>
  );
});

export default Empty;
