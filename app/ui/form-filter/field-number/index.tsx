import { memo } from "react";
import { NumberInput, rem } from "@mantine/core";
import useNumberField from "@/app/lib/hooks/use-number-field";
import classes from "./styles.module.css";

import NumberControls from "./number-controls";

type FieldNumberPropsType = {
  name: string;
  label?: string;
  placeholder: string;
  defaultValue: string;
  startValue: number;
};

const FieldNumber = memo((props: FieldNumberPropsType) => {
  const { handlers, ...other } = useNumberField(props.name);

  return (
    <NumberInput
      maw={rem(138)}
      classNames={classes}
      {...props}
      {...other}
      size="md"
      radius="md"
      min={0}
      step={1}
      max={10}
      allowNegative={false}
      decimalScale={1}
      clampBehavior="strict"
      rightSectionWidth="auto"
      rightSection={<NumberControls {...handlers} />}
    />
  );
});

export default FieldNumber;

// onClick={() => handlersRef.current?.decrement()}
