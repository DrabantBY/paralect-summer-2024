import { memo } from "react";
import { Group, Stack, Text, rem } from "@mantine/core";
import CardMoney from "../card-money";

type CardDetailsPropsType = {
  duration?: string;
  premiere?: string;
  budget?: number;
  gross?: number;
  genres: string;
  details: boolean;
};

const CardDetails = memo(
  ({
    genres,
    duration,
    premiere,
    budget,
    gross,
    details,
  }: CardDetailsPropsType) => {
    return (
      <Stack gap="lg">
        {duration ? (
          <Group align="flex-start" wrap="nowrap" gap="md">
            <Text
              fz={{ base: "xs", xs: "sm" }}
              c="gray.6"
              miw={details ? rem(140) : "auto"}
            >
              Duration
            </Text>

            <Text fz={{ base: "xs", xs: "sm" }} c="black">
              {duration}
            </Text>
          </Group>
        ) : null}

        {premiere ? (
          <Group align="flex-start" wrap="nowrap" gap="md">
            <Text
              fz={{ base: "xs", xs: "sm" }}
              c="gray.6"
              miw={details ? rem(140) : "auto"}
            >
              Premiere
            </Text>

            <Text fz={{ base: "xs", xs: "sm" }} c="black">
              {premiere}
            </Text>
          </Group>
        ) : null}

        {budget ? (
          <Group align="flex-start" wrap="nowrap" gap="md">
            <Text
              fz={{ base: "xs", xs: "sm" }}
              c="gray.6"
              miw={details ? rem(140) : "auto"}
            >
              Budget
            </Text>

            <CardMoney value={budget} />
          </Group>
        ) : null}

        {gross ? (
          <Group align="flex-start" wrap="nowrap" gap="md">
            <Text
              fz={{ base: "xs", xs: "sm" }}
              c="gray.6"
              miw={details ? rem(140) : "auto"}
            >
              Gross worldwide
            </Text>

            <CardMoney value={gross} />
          </Group>
        ) : null}

        <Group align="flex-start" wrap="nowrap" gap="md">
          <Text
            fz={{ base: "xs", xs: "sm" }}
            c="gray.6"
            miw={details ? rem(140) : "auto"}
          >
            Genres
          </Text>

          <Text fz={{ base: "xs", xs: "sm" }} c="black">
            {genres}
          </Text>
        </Group>
      </Stack>
    );
  }
);

export default CardDetails;
