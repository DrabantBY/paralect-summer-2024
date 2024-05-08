'use client';

import { MouseEventHandler, memo } from 'react';
import { Group, Modal } from '@mantine/core';
import ModalForm from '../modal-form';
import VoteAverage from '../vote-average';
import useRating from '@/app/lib/hooks/use-rating';
import classes from './styles.module.css';

type ModalRatingPropsType = {
  title: string;
  id: number;
};

const CardModal = memo(({ title, id }: ModalRatingPropsType) => {
  const { opened, ratingValue, saveRating, closeRating, openRating } = useRating();

  return (
    <Group gap="xs" wrap="nowrap">
      <Modal
        classNames={classes}
        opened={opened}
        onClose={closeRating}
        title="Your rating"
        centered
        size="sm"
        padding="xlg"
        radius="md">
        <ModalForm title={title} rating={ratingValue} onSubmit={saveRating} />
      </Modal>
      <VoteAverage value={ratingValue} onClick={openRating} />
    </Group>
  );
});

export default CardModal;
