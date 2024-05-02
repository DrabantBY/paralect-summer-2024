import { memo } from 'react';
import Link from 'next/link';
import { Button, rem } from '@mantine/core';
import classes from './styles.module.css';

type BtnLinkPropsType = {
  label: string;
  href: string;
};

const BtnLink = memo(({ label, href }: BtnLinkPropsType) => {
  return (
    <Button
      classNames={classes}
      component={Link}
      href={href}
      h={rem(40)}
      w="fit-content"
      color="purple.5"
      fz="xs"
      lh="xs"
      fw="600"
      py="xs"
      px="lg"
      radius="md">
      {label}
    </Button>
  );
});

export default BtnLink;
