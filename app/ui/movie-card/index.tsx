import { memo } from "react";
import Link from "next/link";
import { Paper, Text, Group, Stack, Flex } from "@mantine/core";
import VoteAverage from "./vote-average";
import VoteCount from "./vote-count";
import CardDetails from "./card-details";
import CardImage from "./card-image";
import CardHeader from "./card-header";
import { StarActivated } from "./card-star";
import type { MovieCardDatatype } from "@/app/types/data";

type MovieCardPropsType = {
  handler?: () => void;
  movie: MovieCardDatatype;
  details: boolean;
};

export const MovieCard = memo(
  ({ movie, details, handler }: MovieCardPropsType) => {
    return (
      <Paper
        radius="lg"
        p={{ base: "sm", sm: "xxl" }}
        component={Link}
        href={`/movies/${movie.id}`}
      >
        <Flex
          align="flex-start"
          wrap={details ? { base: "wrap", xs: "nowrap" } : "nowrap"}
          gap="xlg"
        >
          <CardImage src={movie.poster_path} details={details} />

          <Flex
            direction="column"
            justify="space-between"
            mih={!details ? 170 : { base: "auto", xs: 352 }}
            gap="md"
            w="100%"
          >
            <Stack gap="md">
              <CardHeader movie={movie} handler={handler} />

              <Text fz={{ base: "xs", xs: "sm" }} c="gray.6">
                {movie.release_year}
              </Text>

              <Group gap="md">
                <VoteAverage value={movie.vote_average}>
                  <StarActivated />
                </VoteAverage>

                <VoteCount value={movie.vote_count} />
              </Group>
            </Stack>

            <CardDetails
              genres={movie.genres}
              duration={movie.runtime}
              premiere={movie.release_date}
              budget={movie.budget}
              gross={movie.revenue}
              details={details}
            />
          </Flex>
        </Flex>
      </Paper>
    );
  }
);

export default MovieCard;
