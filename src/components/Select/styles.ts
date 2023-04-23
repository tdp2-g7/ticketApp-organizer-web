import styled from 'styled-components';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import COLORS from '../../helpers/colors';

export const CustomSelect = styled(Select)`
  height: fit-content;
  width: 100%;
  background-color: ${COLORS.white};
  font-size: 14px;
`;

export const FormGroup = styled(FormControl)`
  flex-direction: column;
  width: 100%;
`;

export const ErrorBlock = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 5px;
  font-size: 13px;
  line-height: 1.5;
  color: red;
`;
