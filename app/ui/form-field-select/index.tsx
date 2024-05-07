import { ComboboxData, Select } from '@mantine/core';
import { memo } from 'react';
import { ArrowDownIcon } from '../icons';
import classes from './styles.module.css';

type FormFieldSelectPropsType = {
  name: string;
  label: string;
  placeholder: string;
  data: ComboboxData;
};

const FormFieldSelect = memo((props: FormFieldSelectPropsType) => {
  return (
    <Select
      classNames={classes}
      {...props}
      withCheckIcon={false}
      size="md"
      radius="md"
      rightSection={<ArrowDownIcon color="var(--mantine-color-gray-5)" size={24} />}
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

export default FormFieldSelect;
