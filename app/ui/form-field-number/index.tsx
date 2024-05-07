import { memo } from 'react';
import { NumberInput } from '@mantine/core';
import classes from './styles.module.css';

type FormFieldNumberPropsType = {
  name: string;
  label?: string;
  placeholder: string;
};

const FormFieldNumber = memo((props: FormFieldNumberPropsType) => {
  return <NumberInput classNames={classes} {...props} size="md" radius="md" />;
});

export default FormFieldNumber;
