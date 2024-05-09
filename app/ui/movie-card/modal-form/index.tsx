import { memo, useState, useCallback } from 'react';
import { Group, Rating, Stack, Text } from '@mantine/core';
import { StarDisabled } from '../card-star';
import { StarActivated } from '../card-star';
import BtnLink from '../../btn-link';
import BtnReset from '../../btn-reset/btn-reset';
import classes from './styles.module.css';

type ModalFormPropsType = {
  title: string;
  rating: number;
  submit: (value: number) => void;
};

const ModalForm = memo(({ title, rating, submit }: ModalFormPropsType) => {
  const [ratingValue, setRatingValue] = useState<number>(rating);

  const resetRating = useCallback(() => {
    setRatingValue(0);
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submit(ratingValue);
      }}>
      <Stack gap="xlg" mt="xlg">
        <Text fz="sm" fw="700">
          {title}
        </Text>

        <Rating
          classNames={classes}
          count={10}
          emptySymbol={<StarDisabled />}
          fullSymbol={<StarActivated />}
          value={ratingValue}
          onChange={setRatingValue}
        />

        <Group gap="xlg">
          <BtnLink label="Save" type="submit" />

          <BtnReset
            label="Remove rating"
            onClick={resetRating}
            disabled={ratingValue === 0}
          />
        </Group>
      </Stack>
    </form>
  );
});

export default ModalForm;
