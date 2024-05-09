import { memo } from 'react';
import { NumberInput } from '@mantine/core';
import classes from './styles.module.css';

type FieldNumberPropsType = {
  defaultValue?: string;
  name: string;
  label?: string;
  placeholder: string;
};

const FieldNumber = memo((props: FieldNumberPropsType) => {
  return (
    <NumberInput
      classNames={classes}
      {...props}
      size="md"
      radius="md"
      min={0}
      step={0.1}
      max={10}
      allowNegative={false}
      decimalScale={1}
      clampBehavior="strict"
    />
  );
});

export default FieldNumber;
