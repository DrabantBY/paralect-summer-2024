"use client";

import { usePathname } from "next/navigation";
import { Box, Flex } from "@mantine/core";
import Logo from "../logo";
import RouteLink from "../route-link";

const Navigation = () => {
  const path = usePathname();

  return (
    <Box p={{ base: "xmd", lg: "xxl" }}>
      <Logo />

      <Flex
        w={{ base: "fit-content", lg: "auto" }}
        gap="xlg"
        direction={{ base: "row", lg: "column" }}
        justify={{ base: "flex-start", lg: "center" }}
      >
        <RouteLink href="/movies" label="Movies" active={path === "/movies"} />

        <RouteLink
          href="/movies/rated"
          label="Rated&nbsp;movies"
          active={path === "/movies/rated"}
        />
      </Flex>
    </Box>
  );
};

export default Navigation;
