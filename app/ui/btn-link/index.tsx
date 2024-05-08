import { ElementType, memo } from 'react';

import { Button, rem } from '@mantine/core';
import classes from './styles.module.css';

type BtnLinkPropsType = {
  label: string;
  href?: string;
  component?: ElementType<any, any>;
  onClick?: () => void;
};

const BtnLink = memo(({ label, component, href, onClick }: BtnLinkPropsType) => {
  return (
    <Button
      classNames={classes}
      component={component}
      href={href}
      onClick={onClick}
      h={rem(40)}
      w="fit-content"
      color="purple.5"
      fz="xs"
      lh="xs"
      fw="600"
      py="xmd"
      px="xl"
      radius="md">
      {label}
    </Button>
  );
});

export default BtnLink;
