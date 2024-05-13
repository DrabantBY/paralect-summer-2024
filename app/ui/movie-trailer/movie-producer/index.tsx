import { memo } from "react";
import NextImage from "next/image";
import { Title, Image, Group, Box, rem } from "@mantine/core";
import placeholder from "@/public/movie.png";

type MovieProducerPropsType = {
  src: string;
  title: string;
};

const MovieProducer = memo(({ src, title }: MovieProducerPropsType) => {
  return (
    <Group gap="md">
      <Box
        pos="relative"
        miw={rem(40)}
        mih={rem(40)}
        style={{
          borderRadius: "50%",
          overflow: "hidden",
          border: "0.5px solid var(--mantine-color-gray-0)",
        }}
      >
        <Image
          component={NextImage}
          sizes="100%"
          src={src}
          alt="company logo"
          fit="contain"
          fill
          priority
          fallbackSrc={placeholder.src}
        />
      </Box>

      <Title fz="sm" fw="700" lh="xs">
        {title}
      </Title>
    </Group>
  );
});

export default MovieProducer;
