import { memo } from 'react';
import Link from 'next/link';
import { NavLink, rem } from '@mantine/core';
import classes from './styles.module.css';

type NavRefPropsType = {
  href: string;
  label: string;
  active: boolean;
};

const NavRef = memo((props: NavRefPropsType) => {
  return (
    <NavLink
      classNames={classes}
      component={Link}
      {...props}
      h={rem(42)}
      p="xs"
      lh="xs"
    />
  );
});

export default NavRef;
