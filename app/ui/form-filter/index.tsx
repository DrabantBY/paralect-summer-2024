"use client";

import { memo } from "react";
import { useRouter } from "next/navigation";
import { Group, rem } from "@mantine/core";
import FieldMulti from "./field-multi";
import FieldSelect from "./field-select";
import FieldNumber from "./field-number";
import BtnReset from "../btn-reset/btn-reset";
import checkIsDisabled from "@/app/lib/utils/check-is-disabled";
import type { MoviesPageSearchParamsType } from "@/app/types/page";
import classes from "./styles.module.css";

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
      <form className={classes.form}>
        <Group align="end" mb="xxl" justify="space-between" wrap="nowrap">
          <FieldMulti
            defaultValue={searchParams["with_genres"]?.split(",")}
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
              defaultValue={searchParams["vote_average.gte"] ?? ""}
              startValue={Number(searchParams["vote_average.gte"] ?? "")}
            />

            <FieldNumber
              name="vote_average.lte"
              placeholder="To"
              defaultValue={searchParams["vote_average.lte"] ?? ""}
              startValue={Number(searchParams["vote_average.lte"] ?? "")}
            />
          </Group>

          <BtnReset
            label="Reset filters"
            disabled={disabled}
            onClick={() => replace("/movies")}
          />
        </Group>

        <Group justify="end">
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
