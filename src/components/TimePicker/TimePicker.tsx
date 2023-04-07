import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { ITimePickerProps } from './types';
import { CustomTimeField } from './styles';

const TimePicker = (props: ITimePickerProps) => {
  const {
    input: { name, onChange, value },
  } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CustomTimeField
        name={name}
        onChange={(v: any) => onChange(new Date(v))}
        value={(value as any) === '' ? null : value}
        {...props}
      />
    </LocalizationProvider>
  );
};

export default TimePicker;
