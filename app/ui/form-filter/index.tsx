import { Group, NumberInput } from '@mantine/core';
import FormFieldSelect from '../form-field-select';
import BtnReset from '../btn-reset/btn-reset';
import type { GenreDataType } from '@/app/types/data';
import classes from './styles.module.css';

type FormFilterPropsType = {
  genres: GenreDataType[];
};

const FormFilter = ({ genres }: FormFilterPropsType) => {
  const genresData = genres.map(({ id, name }) => ({ value: `${id}`, label: name }));
  const yearsData = Array.from({ length: 25 }, (_, i) => `${2000 + i}`);
  const sortData = [
    { value: 'popularity.desc', label: 'Most Popular' },
    { value: 'popularity.asc', label: 'Least Popular' },
    { value: 'vote_average.desc', label: 'Most Rated' },
    { value: 'vote_average.asc', label: 'Least Rated' },
    { value: 'vote_count.desc', label: 'Most Voted' },
    { value: 'vote_count.asc', label: 'Least Voted' },
  ];

  return (
    <form className={classes.form}>
      <Group gap="xlg" wrap="nowrap" align="flex-end" mb="xxl">
        <Group gap="xlg" wrap="nowrap" grow>
          <FormFieldSelect label="Genres" placeholder="Select genre" data={genresData} />
          <FormFieldSelect
            label="Release year"
            placeholder="Select release year"
            data={yearsData}
          />
          <Group gap="md" align="flex-end" wrap="nowrap">
            <NumberInput label="Ratings" placeholder="From" size="md" radius="md" />
            <NumberInput placeholder="To" size="md" radius="md" />
          </Group>
        </Group>
        <BtnReset />
      </Group>
      <Group justify="flex-end">
        <FormFieldSelect label="Sort by" placeholder="" data={sortData} />
      </Group>
    </form>
  );
};

export default FormFilter;
