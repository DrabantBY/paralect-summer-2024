import { memo } from "react";
import NextImage from "next/image";
import { Box, Image } from "@mantine/core";
import nopostersm from "@/public/noposter_sm.png";
import noposterlg from "@/public/noposter_lg.png";

type CardImagePropsType = {
  src: string;
  details: boolean;
};

const CardImage = memo(({ src, details }: CardImagePropsType) => {
  return (
    <Box pos="relative" miw={!details ? 120 : 250} h={!details ? 170 : 352}>
      <Image
        component={NextImage}
        src={src}
        alt="Poster image"
        sizes="100%"
        fit="cover"
        fill
        fallbackSrc={!details ? nopostersm.src : noposterlg.src}
        priority
      />
    </Box>
  );
});

export default CardImage;
