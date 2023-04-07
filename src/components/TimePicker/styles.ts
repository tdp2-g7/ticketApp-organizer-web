import styled from 'styled-components';
import { TimeField } from '@mui/x-date-pickers/TimeField';

export const Container = styled.div`
  width: 60%;
`;

export const CustomTimeField = styled(TimeField)`
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
    span {
      display: none;
    }
  }

`;
