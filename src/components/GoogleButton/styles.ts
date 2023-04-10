import COLORS from 'src/helpers/colors';
import styled from 'styled-components';
import { IButtonProps } from './types';

export const CustomButton = styled.button<IButtonProps>`
  padding: 10px 8px;
  margin: 0;
  font-size: ${({ isSmall }) => (isSmall ? '16px' : '20px')};
  border-radius: 20px;
  font-family: 'Poppins';
  border: 1px;
  cursor: pointer;
  color: ${COLORS.white};
  background: rgb(2, 0, 36);
  background: linear-gradient(
    121deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(156, 63, 228, 1) 0%,
    rgba(198, 86, 71, 1) 91%
  );
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const GoogleSmall = styled.img<IButtonProps>`
  width: ${({ isSmall }) => (isSmall ? '30px' : '40px')};
  height: auto;
  margin-right: 5px;
`;
