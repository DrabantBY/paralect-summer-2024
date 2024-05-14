"use client";

import { memo } from "react";
import { Group, rem } from "@mantine/core";
import FieldSelect from "./field-select";
import FieldNumber from "./field-number";
import BtnReset from "../btn-reset/btn-reset";
import type { MoviesPageSearchParamsType } from "@/app/types/page";
import { useRouter } from "next/navigation";
import checkIsDisabled from "@/app/lib/utils/check-is-disabled";

type FormFilterPropsType = {
  searchParams: MoviesPageSearchParamsType;
  genres: { value: string; label: string }[];
  years: string[];
  sort: { value: string; label: string }[];
};

const FormFilter = memo(
  ({ genres, years, sort, searchParams }: FormFilterPropsType) => {
    const { replace } = useRouter();
    const disabled = checkIsDisabled(searchParams);

    return (
      <form>
        <Group align="end" mb="xxl" justify="space-between" wrap="nowrap">
          <FieldSelect
            defaultValue={searchParams["with_genres"] ?? null}
            name="with_genres"
            label="Genres"
            placeholder="Select genre"
            data={genres}
          />

          <FieldSelect
            defaultValue={searchParams["primary_release_year"] ?? null}
            name="primary_release_year"
            label="Release year"
            placeholder="Select release year"
            data={years}
          />

          <Group gap="md" align="flex-end" wrap="nowrap" miw={rem(284)}>
            <FieldNumber
              name="vote_average.gte"
              label="Ratings"
              placeholder="From"
            />

            <FieldNumber name="vote_average.lte" placeholder="To" />
          </Group>

          <BtnReset
            label="Reset filters"
            disabled={disabled}
            onClick={() => replace("/movies")}
          />
        </Group>

        <Group mb="xxl" justify="end">
          <FieldSelect
            defaultValue={searchParams["sort_by"] ?? "popularity.desc"}
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
