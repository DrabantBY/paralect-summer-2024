import { memo } from "react";
import dynamic from "next/dynamic";
import { Group, Title } from "@mantine/core";
import type { MovieCardDatatype } from "@/app/types/data";

const CardModal = dynamic(() => import("../card-modal"), { ssr: false });

type CardHeaderPropsType = {
  handler?: () => void;
  movie: MovieCardDatatype;
};

const CardHeader = memo(({ movie, handler }: CardHeaderPropsType) => {
  return (
    <Group align="flex-start" gap="xs" justify="space-between" wrap="nowrap">
      <Title size="md" fw="600" c="purple.5">
        {movie.original_title}
      </Title>

      <CardModal movie={movie} handler={handler} />
    </Group>
  );
});

export default CardHeader;
