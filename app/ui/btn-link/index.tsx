import { ElementType, memo } from "react";
import { Button, rem } from "@mantine/core";
import classes from "./styles.module.css";

type BtnLinkPropsType = {
  label: string;
  href?: string;
  component?: ElementType<any, any>;
  type?: "submit";
  search?: boolean;
};

const BtnLink = memo(
  ({ label, type, component, href, search }: BtnLinkPropsType) => {
    return (
      <Button
        type={type}
        classNames={classes}
        component={component}
        href={href}
        h={search ? rem(32) : rem(40)}
        w="fit-content"
        color="purple.5"
        fz="xs"
        lh="xs"
        fw="600"
        py={search ? "sm" : "xmd"}
        px="xl"
        radius="md"
      >
        {label}
      </Button>
    );
  }
);

export default BtnLink;
