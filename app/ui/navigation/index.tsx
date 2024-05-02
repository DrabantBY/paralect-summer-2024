'use client';

import { usePathname } from 'next/navigation';
import { Box, Stack } from '@mantine/core';
import Logo from '../logo';
import NavRef from '../nav-ref';

const Navigation = () => {
  const path = usePathname();
  return (
    <Box p="xl">
      <Logo />
      <Stack>
        <NavRef href="/movies" label="Movies" active={path === '/movies'} />
        <NavRef
          href="/movies/rated"
          label="Rated movies"
          active={path === '/movies/rated'}
        />
      </Stack>
    </Box>
  );
};

export default Navigation;
