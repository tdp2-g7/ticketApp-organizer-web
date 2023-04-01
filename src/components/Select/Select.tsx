import React, { FunctionComponent } from 'react';
import { InputLabel, MenuItem } from '@mui/material';

import { CustomSelect, FormGroup, ErrorBlock } from './styles';
import { ISelectProps } from './types';

const Select: FunctionComponent<ISelectProps> = (props: ISelectProps) => {
  const {
    input,
    options,
    meta: { touched, error },
    variant = 'outlined',
    label,
  } = props;
  const { onChange, value } = input;
  const hasError = touched && !!error;

  return (
    <FormGroup variant={variant} size="small">
      {!value && label && (
        <InputLabel id="demo-simple-select-outlined-label">
          {label}
        </InputLabel>
      )}
      <CustomSelect
        {...input}
        onChange={((event: any) => onChange(event.target.value as string)
        )}
        value={value}
        renderValue={(showValue: unknown) => showValue as string}
        error={hasError}
      >
        {options.map((option: any) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </CustomSelect>
      {hasError && <ErrorBlock data-testid="dropdown-help-block">{error}</ErrorBlock>}
    </FormGroup>
  );
};

export default Select;
