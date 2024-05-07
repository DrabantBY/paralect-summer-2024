import { memo } from 'react';
import { Button } from '@mantine/core';
import { CloseIcon } from '../icons';
import classes from './styles.module.css';

const BtnReset = memo(() => {
  return (
    <Button
      type="submit"
      classNames={classes}
      variant="transparent"
      miw="fit-content"
      h={42}
      size="xs"
      color="purple.5"
      rightSection={<CloseIcon size={16} />}>
      Reset filters
    </Button>
  );
});

export default BtnReset;
