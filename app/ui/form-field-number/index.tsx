import { memo } from 'react';
import { NumberInput } from '@mantine/core';
import classes from './styles.module.css';

type FormFieldNumberPropsType = {
  name: string;
  label?: string;
  placeholder: string;
};

const FormFieldNumber = memo((props: FormFieldNumberPropsType) => {
  return (
    <NumberInput
      classNames={classes}
      {...props}
      size="md"
      radius="md"
      min={0}
      step={1}
      max={10}
    />
  );
});

export default FormFieldNumber;
