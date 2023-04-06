import styled from 'styled-components';
import COLORS from '../../../helpers/colors';

export const FormContainer = styled.div`
  margin: 20px 10%;
  border-color: ${COLORS.black};
  width: 80%;
  border-radius: 10px;
  padding: 0 10px 10px 10px; ;
`;

export const CustomForm = styled.form`
  line-height: 2rem;
  font-size: 17px;
  display: flex;
  flex-direction: row;
`;

export const TimeContainer = styled.div`
  padding-right: 10px;
  width: 25%;
`;
