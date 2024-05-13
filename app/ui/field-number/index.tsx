import { memo } from "react";
import { NumberInput, rem } from "@mantine/core";
import useNumber from "@/app/lib/hooks/use-number";
import classes from "./styles.module.css";

type FieldNumberPropsType = {
  defaultValue: string;
  name: string;
  label?: string;
  placeholder: string;
};

const FieldNumber = memo((props: FieldNumberPropsType) => {
  const { value, submit } = useNumber(props.name, props.defaultValue);

  return (
    <NumberInput
      maw={rem(138)}
      classNames={classes}
      {...props}
      value={value}
      onChange={submit}
      size="md"
      radius="md"
      min={0}
      step={1}
      max={10}
      allowNegative={false}
      decimalScale={1}
      clampBehavior="strict"
    />
  );
});

export default FieldNumber;
