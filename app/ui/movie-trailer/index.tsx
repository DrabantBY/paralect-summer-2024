import { memo } from "react";
import { Divider, Paper, Title, Text } from "@mantine/core";
import type {
  CompanyProductionDataType,
  VideoDataType,
} from "@/app/types/data";

type MovieTrailerPropsType = {
  trailer?: VideoDataType;
  production: CompanyProductionDataType[];
  description: string;
};

const MovieTrailer = memo(
  ({ trailer, production, description }: MovieTrailerPropsType) => {
    console.log(trailer);
    return (
      <Paper radius="lg" p="xxl">
        {/* <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/CEArEbO25lE"
          allowFullScreen
        ></iframe> */}
        {trailer ? (
          <>
            <Title size="md" fw="600" mb="xlg">
              Trailer
            </Title>
            <Divider bg="gray.3" my="xl" />
          </>
        ) : null}

        {description ? (
          <>
            <Title size="md" fw="600" mb="xlg">
              Description
            </Title>
            <Text fz="sm" lh="xs">
              {description}
            </Text>
            <Divider bg="gray.3" my="xl" />
          </>
        ) : null}

        <Title size="md" fw="600" mb="xlg">
          Production
        </Title>
      </Paper>
    );
  }
);

export default MovieTrailer;
