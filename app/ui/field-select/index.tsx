import { memo } from "react";
import { ComboboxData, Select } from "@mantine/core";
import { ArrowDownIcon, ArrowUpIcon } from "../icons";
import useSelect from "@/app/lib/hooks/use-select";
import classes from "./styles.module.css";

type FieldSelectPropsType = {
  defaultValue: string | null;
  name: string;
  label: string;
  placeholder: string;
  data: ComboboxData;
};

const FieldSelect = memo((props: FieldSelectPropsType) => {
  const { focused, focus, blur, submit } = useSelect(props.name);
  return (
    <Select
      classNames={classes}
      onChange={submit}
      onFocus={focus}
      onBlur={blur}
      {...props}
      withCheckIcon={false}
      size="md"
      radius="md"
      rightSection={
        focused ? (
          <ArrowUpIcon color="var(--mantine-color-purple-5)" size={24} />
        ) : (
          <ArrowDownIcon color="var(--mantine-color-gray-5)" size={24} />
        )
      }

      // scrollAreaProps={{

      //   scrollbarSize: 7,
      //   offsetScrollbars: false,
      //   type: 'always',
      //   styles: {
      //     thumb: {
      //       height: '24px',
      //       backgroundColor: 'var(--mantine-color-gray-5)',
      //       borderRadius: '1.25rem',
      //     },
      //   },
      // }}
    />
  );
});

export default FieldSelect;
