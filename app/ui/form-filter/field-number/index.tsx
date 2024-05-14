import { memo } from "react";
import { NumberInput, rem } from "@mantine/core";
import useNumberField from "@/app/lib/hooks/use-number-field";
import classes from "./styles.module.css";

type FieldNumberPropsType = {
  name: string;
  label?: string;
  placeholder: string;
};

const FieldNumber = memo((props: FieldNumberPropsType) => {
  const { value, submit } = useNumberField(props.name);

  return (
    <NumberInput
      maw={rem(138)}
      classNames={classes}
      value={value}
      {...props}
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
