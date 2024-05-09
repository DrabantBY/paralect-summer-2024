import { memo } from 'react';
import { ComboboxData, Select } from '@mantine/core';
import { ArrowDownIcon } from '../icons';
import classes from './styles.module.css';

type FieldSelectPropsType = {
  defaultValue?: string | null;
  name: string;
  label: string;
  placeholder: string;
  data: ComboboxData;
};

const FieldSelect = memo((props: FieldSelectPropsType) => {
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

export default FieldSelect;
