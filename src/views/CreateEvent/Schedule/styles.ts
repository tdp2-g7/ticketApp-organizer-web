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
  height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TimeContainer = styled.div`
  padding-right: 10px;
  width: 30%;
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

export const RemoveButtonContainer = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-left: 15px;
`;

export const RemoveButton = styled.div`
  padding: 10px;
  height: 10px;
  width: 10px;
  cursor: pointer;
  border-radius: 50%;
  border: 1px solid ${COLORS.violet};
  color: ${COLORS.violet};
  background-color: ${COLORS.white};
`;

export const SubmitButtonContainer = styled.div`
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
`;

export const SubmitButton = styled.button`
  padding: 8px;
  font-size: 14px;
  width: 90px;
  border-radius: 30px;
  margin-top: 10px;
  font-family: 'Poppins';
  cursor: pointer;
  border: 1px solid ${COLORS.violet};
  color: ${COLORS.violet};
  background-color: ${COLORS.white};
`;
