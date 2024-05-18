import { memo } from "react";
import { ActionIcon, Stack } from "@mantine/core";
import { ControlDownIcon, ControlUpIcon } from "@/app/ui/icons";
import classes from "./styles.module.css";

type NumberControlsPropsType = {
  increment: () => void;
  decrement: () => void;
};

const NumberControls = memo(
  ({ increment, decrement }: NumberControlsPropsType) => {
    return (
      <Stack gap={0} mr={9}>
        <ActionIcon
          classNames={classes}
          onClick={increment}
          color="gray.5"
          size="xs"
          radius={0}
          variant="transparent"
          mb={-2}
        >
          <ControlUpIcon size={12} />
        </ActionIcon>
        <ActionIcon
          classNames={classes}
          onClick={decrement}
          color="gray.5"
          size="xs"
          radius={0}
          variant="transparent"
          mt={-2}
        >
          <ControlDownIcon size={12} />
        </ActionIcon>
      </Stack>
    );
  }
);

export default NumberControls;
