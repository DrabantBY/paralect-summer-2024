import { memo } from "react";
import Link from "next/link";
import NextImage, { StaticImageData } from "next/image";
import { Stack, Image, Text } from "@mantine/core";
import BtnLink from "../btn-link";

type EmptyPropsType = {
  src: StaticImageData;
  message: string;
  label?: string;
  width: number;
};

const Empty = memo(({ src, message, label, width }: EmptyPropsType) => {
  return (
    <Stack align="center" gap="xlg">
      <Image
        component={NextImage}
        src={src}
        alt="Not found image"
        priority
        maw={width}
      />

      <Text
        fw="600"
        size="md"
        mt={message.includes("page") ? 32 : 0}
        ta="center"
      >
        {message}
      </Text>

      {label ? <BtnLink label={label} component={Link} href="/" /> : null}
    </Stack>
  );
});

export default Empty;
