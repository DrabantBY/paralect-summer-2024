import { FormEventHandler, memo, useState } from 'react';
import { Rating, Stack, Text } from '@mantine/core';
import StarDisabled from '../../star-disabled';
import StarActivated from '../../star-activated';
import classes from './styles.module.css';

type ModalFormPropsType = {
  title: string;
  rating: number;
  onSubmit: (value: number) => void;
};

const ModalForm = memo(({ title, rating, onSubmit }: ModalFormPropsType) => {
  const [ratingValue, setRatingValue] = useState<number>(rating);

  const saveRating: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    onSubmit(ratingValue);
  };

  const resetRating = () => {
    setRatingValue(0);
    onSubmit(0);
  };

  const changeRating = (value: number) => {
    setRatingValue(value);
  };

  return (
    <form onSubmit={saveRating}>
      <Stack gap="xlg" mt="xlg">
        <Text fz="sm" fw="700">
          {title}
        </Text>
        <Rating
          name="rating"
          classNames={classes}
          count={10}
          emptySymbol={<StarDisabled />}
          fullSymbol={<StarActivated />}
          value={ratingValue}
          onChange={changeRating}
        />
        <button type="submit">submit</button>
        <button type="button" onClick={resetRating}>
          remove rating
        </button>
      </Stack>
    </form>
  );
});

export default ModalForm;
