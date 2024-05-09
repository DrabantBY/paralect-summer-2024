'use client';

import { usePathname } from 'next/navigation';
import { Box, Stack } from '@mantine/core';
import Logo from '../logo';
import RouteLink from '../route-link';

const Navigation = () => {
  const path = usePathname();

  return (
    <Box p="xxl">
      <Logo />

      <Stack gap="xlg">
        <RouteLink href="/movies" label="Movies" active={path === '/movies'} />

        <RouteLink
          href="/movies/rated"
          label="Rated movies"
          active={path === '/movies/rated'}
        />
      </Stack>
    </Box>
  );
};

export default Navigation;
