import { memo } from "react";
import { TextInput, rem } from "@mantine/core";
import { SearchIcon } from "../icons";
import BtnLink from "../btn-link";
import formSearchAction from "@/app/lib/action/form-search-action";
import classes from "./styles.module.css";

type FormSearchPropsType = {
  defaultValue: string;
};

const FormSearch = memo((props: FormSearchPropsType) => {
  return (
    <form action={formSearchAction}>
      <TextInput
        classNames={classes}
        name="search"
        {...props}
        miw={{ base: "auto", xs: rem(490) }}
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
        rightSection={<BtnLink label="search" type="submit" search />}
        rightSectionWidth="auto"
        rightSectionProps={{
          style: {
            marginInlineEnd: "var(--mantine-spacing-lg)",
          },
        }}
      />
    </form>
  );
});

export default FormSearch;
