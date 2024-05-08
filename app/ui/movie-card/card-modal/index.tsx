'use client';

import { memo } from 'react';
import { Group, Modal } from '@mantine/core';
import ModalForm from '../modal-form';
import VoteAverage from '../vote-average';
import useRating from '@/app/lib/hooks/use-rating';
import classes from './styles.module.css';
import { StarRated } from '../card-star';
import { CloseIcon } from '../../icons';

type ModalRatingPropsType = {
  title: string;
  id: number;
};

const CardModal = memo(({ title, id }: ModalRatingPropsType) => {
  const { opened, currentRatingValue, saveRating, closeRating, openRating } =
    useRating(id);

  return (
    <Group gap="xs" wrap="nowrap">
      <Modal
        closeButtonProps={{
          icon: <CloseIcon size={16} color="var(--mantine-color-gray-5)" />,
        }}
        classNames={classes}
        opened={opened}
        onClose={closeRating}
        title="Your rating"
        centered
        size="sm"
        padding="xlg"
        radius="md">
        <ModalForm title={title} rating={currentRatingValue} submit={saveRating} />
      </Modal>
      <VoteAverage value={currentRatingValue} onClick={openRating}>
        <StarRated />
      </VoteAverage>
    </Group>
  );
});

export default CardModal;
