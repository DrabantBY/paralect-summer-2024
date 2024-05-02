import Link from 'next/link';

import { NavLink } from '@mantine/core';
import LogoIcon from '../logo-icon';

const Navigation = () => {
  return (
    <>
      <NavLink leftSection={<LogoIcon size={32} />} label="ArrowFlicks" />
      <NavLink component={Link} href="/" label="Movies" active />
      <NavLink component={Link} href="/rated" label="Rated movies" />
    </>
  );
};

export default Navigation;
