import { memo } from "react";
import { inter } from "@/app/fonts";
import { ComboboxData, MultiSelect, rem } from "@mantine/core";
import { ArrowDownIcon, ArrowUpIcon } from "../../icons";
import useSelectMulti from "@/app/lib/hooks/use-select-multi";
import classes from "./styles.module.css";

type FieldMultiPropsType = {
  defaultValue?: string[];
  name: string;
  label: string;
  placeholder: string;
  data: ComboboxData;
};

const FieldMulti = memo((props: FieldMultiPropsType) => {
  const { focused, focus, blur, submit } = useSelectMulti(props.name);

  return (
    <MultiSelect
      className={focused ? `${inter.variable} focus` : inter.variable}
      classNames={classes}
      {...props}
      miw={rem(284)}
      withCheckIcon={false}
      size="md"
      radius="md"
      onDropdownOpen={focus}
      onDropdownClose={blur}
      onChange={submit}
      maxValues={3}
      rightSection={
        focused ? (
          <ArrowUpIcon color="var(--mantine-color-purple-5)" size={24} />
        ) : (
          <ArrowDownIcon color="var(--mantine-color-gray-5)" size={24} />
        )
      }
      scrollAreaProps={{
        scrollbarSize: 8,
        offsetScrollbars: false,
        type: "always",
        classNames: { thumb: "thumb" },
      }}
    />
  );
});

export default FieldMulti;
