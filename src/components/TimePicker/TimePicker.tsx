import React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { ITimePickerProps } from './types';
import { CustomTimeField, ErrorBlock } from './styles';

const TimePicker = (props: ITimePickerProps) => {
  const {
    input: { name, onChange, value },
    meta: { touched, error },
    showError = true,
  } = props;
  const hasError = !!touched && !!error;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <CustomTimeField
        name={name}
        error={hasError}
        onChange={(v: any) => onChange(new Date(v))}
        value={(value as any) === '' ? null : new Date(value)}
        {...props}
      />
      {showError && <ErrorBlock>{hasError ? error : ' '}</ErrorBlock>}
    </LocalizationProvider>
  );
};

export default TimePicker;
