import { memo } from 'react';
import { NumberInput } from '@mantine/core';
import useFieldSubmit from '@/app/lib/hooks/use-filed-submit';
import classes from './styles.module.css';

type FieldNumberPropsType = {
  defaultValue?: string;
  name: string;
  label?: string;
  placeholder: string;
};

const FieldNumber = memo((props: FieldNumberPropsType) => {
  const submit = useFieldSubmit(props.name);
  return (
    <NumberInput
      classNames={classes}
      onChange={submit}
      {...props}
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
