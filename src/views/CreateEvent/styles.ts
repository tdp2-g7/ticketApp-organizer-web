import styled from 'styled-components';
import { Clear, InfoOutlined, Star } from '@mui/icons-material';
import COLORS from '../../helpers/colors';

export const FormContainer = styled.div`
  margin: 20px 10%;
  border-color: ${COLORS.black};
  width: 80%;
  border-radius: 10px;
  padding: 0 10px 10px 10px;
`;

export const CustomForm = styled.form`
  line-height: 2rem;
  font-size: 17px;
`;

export const ButtonContainer = styled.div`
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 8px;
  font-size: 20px;
  width: 250px;
  border-radius: 30px;
  margin-top: 10px;
  font-family: 'Poppins';
  cursor: pointer;
  border: 1px solid ${COLORS.violet};
  color: ${COLORS.violet};
  background-color: ${COLORS.white};
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
  margin-top: 0;
  font-weight: bold;
  flex: 1;
  font-family: 'Poppins';
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

export const RowFAQsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.p`
  font-size: 20px;
  font-family: 'Poppins';
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
  width: 100%;
`;

export const TimeContainer = styled.div`
  padding-right: 10px;
  width: 40%;
`;

export const CustomImg = styled.img`
  width: 150px;
  height: auto;
  border-radius: 5px;
  margin-right: 5px;
  object-fit: cover;
`;

export const ImagesRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  overflow-x: scroll;
`;

export const ImagesToEditContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ImageCard = styled.img`
  width: 150px;
  height: auto;
  border-radius: 5px;
  object-fit: cover;
`;

export const RemoveIcon = styled(Clear)`
  background: ${COLORS.warningRed};
  border-radius: 100px;
  transform: scale(0.6);
  margin: 0;
  color: ${COLORS.white};
  cursor: pointer;
`;

export const StarIcon = styled(Star)`
  border-radius: 100px;
  margin: 0;
  cursor: pointer;
`;

export const InfoOutlinedIcon = styled(InfoOutlined)`
  margin: 0;
`;

export const RowImage = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ActionButton = styled.div`
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
  padding: 8px;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid ${COLORS.violet};
  color: ${COLORS.violet};
  border-radius: 8px;
  width: 60%;
  background: ${COLORS.greyMischka};
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const DraftButton = styled.div`
  padding: 8px;
  font-size: 14px;
  width: 200px;
  border-radius: 30px;
  font-family: 'Poppins';
  margin-right: 10px;
  cursor: pointer;
  border: 1px solid ${COLORS.violet};
  color: ${COLORS.violet};
  background-color: ${COLORS.white};
`;

export const RowIcons = styled.div`
  width: 150px;
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const ModalTitle = styled.p`
  font-size: 24px;
  margin: 0;
  font-weight: bold;
  font-family: 'Poppins';
`;
