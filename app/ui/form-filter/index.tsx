'use client';

import { memo } from 'react';
import { Group } from '@mantine/core';
import FieldSelect from '../field-select';
import FieldNumber from '../field-number';
import BtnReset from '../btn-reset/btn-reset';
import formFilterAction from '@/app/lib/action/form-filter-action';
import type { MoviesPageSearchParamsType } from '@/app/types/page';
import classes from './styles.module.css';

type FormFilterPropsType = {
  genres: { value: string; label: string }[];
  searchParams: MoviesPageSearchParamsType;
  years: string[];
};

const FormFilter = memo(({ genres, searchParams, years }: FormFilterPropsType) => {
  return (
    <form className={classes.form} action={formFilterAction}>
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

      <Group gap="md" align="flex-end" wrap="nowrap">
        <FieldNumber
          defaultValue={searchParams['vote_average.gte'] ?? ''}
          name="vote_average.gte"
          label="Ratings"
          placeholder="From"
        />

        <FieldNumber
          defaultValue={searchParams['vote_average.lte'] ?? ''}
          name="vote_average.lte"
          placeholder="To"
        />
      </Group>

      <BtnReset label="Reset filters" disabled={false} />

      <button type="submit">submit</button>
    </form>
  );
});

export default FormFilter;
