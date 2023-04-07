import styled from 'styled-components';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { IComponentProps } from './types';

export const Container = styled.div`
  width: 60%;
`;

export const CustomTimeField = styled(TimeField)<IComponentProps>`
  .MuiOutlinedInput-input {
    padding: 15px 14px;
  }

  .MuiInputBase-input {
    font-size: 14px;
    font-family: 'Poppins';
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill::first-line,
    &:-webkit-autofill:focus {
      -webkit-background-clip: text;
      font-size: 14px;
    }
  }

  label {
    display: flex;
    font-size: 14px;
    font-family: 'Poppins';
    color: ${({ error }) => (error ? '#d32f2f' : 'rgba(0, 0, 0, 0.6)')};
    span {
      display: none;
    }
  }
`;

export const ErrorBlock = styled.div`
  width: 100%;
  height: 15px;
  margin-top: 5px;
  font-size: 13px;
  line-height: 1.5;
  color: red;
  text-align: left;
`;
