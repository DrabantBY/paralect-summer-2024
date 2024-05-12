import { memo } from "react";
import { TextInput, rem } from "@mantine/core";
import { SearchIcon } from "../icons";
import classes from "./styles.module.css";
import BtnLink from "../btn-link";

const FieldSearch = memo(() => {
  return (
    <form>
      <TextInput
        classNames={classes}
        name="search"
        miw={rem(490)}
        radius="md"
        placeholder="Search movie title"
        leftSection={
          <SearchIcon size={16} color="var(--mantine-color-gray-5)" />
        }
        leftSectionWidth="auto"
        leftSectionProps={{
          style: {
            paddingInlineStart: "var(--mantine-spacing-lg)",
          },
        }}
        rightSection={<BtnLink label="search" search />}
        rightSectionWidth="auto"
        rightSectionProps={{
          style: {
            paddingInlineEnd: "var(--mantine-spacing-lg)",
          },
        }}
      />
    </form>
  );
});

export default FieldSearch;
