import styled from 'styled-components';
import COLORS from '../../helpers/colors';

export const FormContainer = styled.div`
  margin: 20px 10%;
  border-color: ${COLORS.black};
  width: 80%;
  border-radius: 10px;
  padding: 0 10px 10px 10px; ;
`;

export const CustomForm = styled.form`
  line-height: 2rem;
  font-size: 17px; ;
`;

export const ButtonContainer = styled.div`
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 8px;
  font-size: 20px;
  font-weight: bold;
  width: 250px;
  border: none;
  border-radius: 30px;
  margin-top: 10px;
  cursor: pointer;
  background-color: ${COLORS.violet};
  color: ${COLORS.white};
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
`;

export const Title = styled.p`
  font-size: 24px;
  margin-bottom: 0px;
  margin-left: 10%;
  font-weight: bold;
  flex: 1;
`;

export const CustomCalendarForm = styled.div`
  line-height: 2rem;
  flex-direction: column;
  width: 90%;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Label = styled.p`
  font-size: 20px;
  margin: 0;
`;

export const VacanciesContainer = styled.div`
  flex-direction: column;
  margin-right: 5%;
  width: 100%;
`;

export const TicketsPerUserContainer = styled.div`
  flex-direction: column;
  width: 100%;
`;

export const ColumnContainer = styled.div`
  flex-direction: column;
`;
