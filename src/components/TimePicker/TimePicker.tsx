import React from 'react';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { ITimePickerProps } from './types';

const TimePicker = (props: ITimePickerProps) => {
  const {
    input: { name, onChange, value },
  } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <TimeField
        name={name}
        onChange={(v) => onChange(new Date(v))}
        value={(value as any) === '' ? null : value}
        {...props}
      />
    </LocalizationProvider>
  );
};

export default TimePicker;
