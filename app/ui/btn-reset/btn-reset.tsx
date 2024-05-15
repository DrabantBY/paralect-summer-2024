import { memo } from "react";
import { Button, rem } from "@mantine/core";
import classes from "./styles.module.css";

type BtnResetPropsType = {
  label: string;
  onClick?: () => void;
  disabled: boolean;
};

const BtnReset = memo(({ label, ...other }: BtnResetPropsType) => {
  return (
    <Button
      classNames={classes}
      variant="transparent"
      miw="fit-content"
      h={rem(42)}
      size="xs"
      color="purple.5"
      {...other}
    >
      {label}
    </Button>
  );
});

export default BtnReset;
