import Link from "next/link";
import { NavLink, rem } from "@mantine/core";
import { LogoIcon } from "../icons";
import { poppins } from "@/app/fonts";
import classes from "./styles.module.css";

const Logo = () => {
  return (
    <NavLink
      className={poppins.variable}
      classNames={classes}
      component={Link}
      href="/"
      leftSection={<LogoIcon size={32} />}
      label="ArrowFlicks"
      c="purple.5"
      p={0}
      mb={{ base: "xlg", lg: rem(80) }}
    />
  );
};

export default Logo;
