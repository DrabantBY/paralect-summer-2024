"use client";

import { memo } from "react";
import { Group, rem } from "@mantine/core";
import FieldSelect from "../field-select";
import FieldNumber from "../field-number";
import BtnReset from "../btn-reset/btn-reset";
import type { MoviesPageSearchParamsType } from "@/app/types/page";

type FormFilterPropsType = {
  genres: { value: string; label: string }[];
  years: string[];
  sort: { value: string; label: string }[];
  searchParams: MoviesPageSearchParamsType;
};

const FormFilter = memo(
  ({ genres, years, sort, searchParams }: FormFilterPropsType) => {
    return (
      <form>
        <Group align="end" mb="xxl" justify="space-between" wrap="nowrap">
          <FieldSelect
            defaultValue={searchParams?.with_genres ?? null}
            name="with_genres"
            label="Genres"
            placeholder="Select genre"
            data={genres}
          />

          <FieldSelect
            defaultValue={searchParams?.primary_release_year ?? null}
            name="primary_release_year"
            label="Release year"
            placeholder="Select release year"
            data={years}
          />

          <Group gap="md" align="flex-end" wrap="nowrap" miw={rem(284)}>
            <FieldNumber
              defaultValue={searchParams["vote_average.gte"] ?? ""}
              name="vote_average.gte"
              label="Ratings"
              placeholder="From"
            />

            <FieldNumber
              defaultValue={searchParams["vote_average.lte"] ?? ""}
              name="vote_average.lte"
              placeholder="To"
            />
          </Group>

          <BtnReset label="Reset filters" disabled={false} />
        </Group>

        <Group mb="xxl" justify="end">
          <FieldSelect
            defaultValue={searchParams?.sort_by ?? "popularity.desc"}
            name="sort_by"
            label="Sort"
            placeholder="Select sort"
            data={sort}
          />
        </Group>
      </form>
    );
  }
);

export default FormFilter;
