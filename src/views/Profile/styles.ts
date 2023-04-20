import COLORS from 'src/helpers/colors';
import styled from 'styled-components';

export const FormContainer = styled.div`
  margin: 0px 10%;
  border-color: ${COLORS.black};
  width: 80%;
  border-radius: 10px;
  padding: 0 10px 10px 10px; ;
`;

export const CustomForm = styled.form`
  line-height: 2rem;
  font-size: 17px; ;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;
`;

export const Label = styled.p`
  font-size: 20px;
  font-family: 'Poppins';
  margin: 0;
`;

export const ButtonContainer = styled.div`
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  padding: 8px;
  font-size: 18px;
  width: 200px;
  border-radius: 30px;
  margin-top: 10px;
  font-family: 'Poppins';
  cursor: pointer;
  border: 1px solid ${COLORS.violet};
  color: ${COLORS.violet};
  background-color: ${COLORS.white};
`;

export const Title = styled.p`
  font-size: 24px;
  margin-bottom: 0px;
  margin-left: 10%;
  font-weight: bold;
  flex: 1;
  font-family: 'Poppins';
`;

export const CustomImg = styled.img`
  width: auto;
  max-width: 300px;
  height: 100%;
  max-height: 300px;
  border-radius: 6px;
  object-fit: cover;
  margin: 30px 0 0 10%;
`;

export const EditContainer = styled.div`
  margin-top: 150px;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColumnContainer = styled.div`
  margin: 30px 10% 0 0;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
`;

export const NameText = styled.p`
  font-size: 20px;
  margin: 0;
  font-weight: bold;
  font-family: 'Poppins';
  text-align: center;
`;

export const DescriptionText = styled.p`
  font-size: 18px;
  margin: 0 40px 0 40px;
  flex: 1;
  font-family: 'Poppins';
  text-align: center;
`;

export const DefaultDescription = styled.p`
  font-size: 20px;
  margin-bottom: 0px;
  flex: 1;
  font-family: 'Poppins';
  text-align: center;
  color: ${COLORS.greyMystic};
`;
