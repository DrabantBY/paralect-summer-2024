import { memo } from 'react';
import NextImage from 'next/image';
import { Box, Image } from '@mantine/core';
import nopostersm from '@/public/noposter_sm.png';
import noposterlg from '@/public/noposter_lg.png';

type CardImagePropsType = {
  src: string;
};

const CardImage = memo(({ src }: CardImagePropsType) => {
  return (
    <Box pos="relative" miw={120} h={170}>
      <Image
        component={NextImage}
        src={src}
        alt="Poster image"
        sizes="100%"
        fit="cover"
        fill
        fallbackSrc={nopostersm.src}
        priority
      />
    </Box>
  );
});

export default CardImage;
