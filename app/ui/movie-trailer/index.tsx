import { memo } from "react";
import { Divider, Paper, Title, Text, Stack } from "@mantine/core";
import MovieProducer from "./movie-producer";
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
    console.log(production);
    return (
      <Paper radius="lg" p="xxl">
        {trailer ? (
          <>
            <Title size="md" fw="600" mb="xlg">
              Trailer
            </Title>
            <iframe
              id={trailer.id}
              width="500"
              height="317"
              src={`https://www.youtube.com/embed/${trailer.key}`}
              allowFullScreen
            ></iframe>
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
        {production.length === 0 ? null : (
          <>
            <Title size="md" fw="600" mb="xlg">
              Production
            </Title>
            <Stack gap="lg">
              {production.map(({ id, name, logo_path }) => (
                <MovieProducer key={id} title={name} src={logo_path} />
              ))}
            </Stack>
          </>
        )}
      </Paper>
    );
  }
);

export default MovieTrailer;
