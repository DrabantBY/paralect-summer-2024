'use client';

import { Group } from '@mantine/core';
import FormFieldSelect from '../form-field-select';
import FormFieldNumber from '../form-field-number';
import BtnReset from '../btn-reset/btn-reset';
import type { GenreDataType } from '@/app/types/data';
import classes from './styles.module.css';

type FormFilterPropsType = {
  genres: GenreDataType[];
};

const FormFilter = ({ genres }: FormFilterPropsType) => {
  const genresData = genres.map(({ id, name }) => ({ value: `${id}`, label: name }));
  const yearsData = Array.from({ length: 25 }, (_, i) => `${2000 + i}`);
  // const sortData = [
  //   { value: 'popularity.desc', label: 'Most Popular' },
  //   { value: 'popularity.asc', label: 'Least Popular' },
  //   { value: 'vote_average.desc', label: 'Most Rated' },
  //   { value: 'vote_average.asc', label: 'Least Rated' },
  //   { value: 'vote_count.desc', label: 'Most Voted' },
  //   { value: 'vote_count.asc', label: 'Least Voted' },
  // ];

  return (
    <form className={classes.form}>
      <FormFieldSelect
        name="with_genres"
        label="Genres"
        placeholder="Select genre"
        data={genresData}
      />
      <FormFieldSelect
        name="primary_release_year"
        label="Release year"
        placeholder="Select release year"
        data={yearsData}
      />
      <Group gap="md" align="flex-end" wrap="nowrap">
        <FormFieldNumber name="vote_average.lte" label="Ratings" placeholder="From" />
        <FormFieldNumber name="vote_average.gte" placeholder="To" />
      </Group>
      <BtnReset label="Reset filters" disabled={false} />
    </form>
  );
};

export default FormFilter;
