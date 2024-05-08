import { memo } from 'react';
import { Button } from '@mantine/core';
import classes from './styles.module.css';

type BtnResetPropsType = {
  label: string;
  onClick?: () => void;
  disabled: boolean;
};

const BtnReset = memo(({ label, onClick, disabled }: BtnResetPropsType) => {
  return (
    <Button
      classNames={classes}
      variant="transparent"
      miw="fit-content"
      h={42}
      size="xs"
      color="purple.5"
      disabled={disabled}
      onClick={onClick}>
      {label}
    </Button>
  );
});

export default BtnReset;
