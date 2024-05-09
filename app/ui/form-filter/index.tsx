'use client';
import { useCallback } from 'react';
import { Group } from '@mantine/core';

import FieldSelect from '../field-select';
import FieldNumber from '../field-number';
import BtnReset from '../btn-reset/btn-reset';

import type { GenreDataType } from '@/app/types/data';
import classes from './styles.module.css';

type FormFilterPropsType = {
  genres: GenreDataType[];
};

const FormFilter = ({ genres }: FormFilterPropsType) => {
  const genresData = genres.map(({ id, name }) => ({ value: `${id}`, label: name }));
  const yearsData = Array.from({ length: 25 }, (_, i) => `${2000 + i}`);

  return (
    <form className={classes.form}>
      <FieldSelect
        name="with_genres"
        label="Genres"
        placeholder="Select genre"
        data={genresData}
      />
      <FieldSelect
        name="primary_release_year"
        label="Release year"
        placeholder="Select release year"
        data={yearsData}
      />
      <Group gap="md" align="flex-end" wrap="nowrap">
        <FieldNumber name="vote_average.lte" label="Ratings" placeholder="From" />
        <FieldNumber name="vote_average.gte" placeholder="To" />
      </Group>
      <BtnReset label="Reset filters" disabled={false} />
    </form>
  );
};

export default FormFilter;
