"use client";

import { memo } from "react";
import { Group, Modal } from "@mantine/core";
import ModalForm from "../modal-form";
import VoteAverage from "../vote-average";
import useRating from "@/app/lib/hooks/use-rating";
import classes from "./styles.module.css";
import { StarRated } from "../card-star";
import { CloseIcon } from "../../icons";
import type { MovieCardDatatype } from "@/app/types/data";

type ModalRatingPropsType = {
  handler?: () => void;
  movie: MovieCardDatatype;
};

const CardModal = memo(({ movie, handler }: ModalRatingPropsType) => {
  const { opened, rating, saveRating, closeRating, openRating } = useRating(
    movie,
    handler
  );

  return (
    <Group gap="xs" wrap="nowrap">
      <Modal
        closeButtonProps={{
          icon: <CloseIcon size={16} color="var(--mantine-color-gray-5)" />,
        }}
        classNames={classes}
        opened={opened}
        onClose={closeRating}
        onClick={(e) => {
          e.stopPropagation();
        }}
        title="Your rating"
        centered
        size="sm"
        padding="xlg"
        radius="md"
      >
        <ModalForm
          title={movie.original_title}
          rating={rating}
          submit={saveRating}
        />
      </Modal>

      <VoteAverage value={rating} onClick={openRating}>
        <StarRated />
      </VoteAverage>
    </Group>
  );
});

export default CardModal;
