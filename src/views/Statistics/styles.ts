import COLORS from 'src/helpers/colors';
import styled from 'styled-components';
import {
  ArrowBackIos,
} from '@mui/icons-material';
import { IRowProps } from './types';

export const Title = styled.p`
  font-size: 26px;
  margin: 0;
  font-family: 'Poppins';
  font-weight: bold;
  color: ${COLORS.darkViolet};
`;

export const Container = styled.div`
  margin: 30px 5%;
`;

export const StatisticsContainer = styled.div`
  margin: 0 0 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Subtitle = styled.p`
  font-size: 20px;
  margin: 15px 0 15px 70px;
  font-weight: bold;
  color: ${COLORS.mineShaft};
  font-family: 'Poppins';
`;

export const RowContainer = styled.div<IRowProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: ${(props) => (props.hasMargin ? '20px' : '0')};
`;

export const BackArrowContainer = styled(ArrowBackIos)`
  transform: scale(0.75);
  margin: 5px 0 0 10px;
  color: ${COLORS.greyMystic};
  cursor: pointer;
`;

export const BackText = styled.p`
  font-size: 12px;
  margin: 5px 0 0 0;
  color: ${COLORS.greyMystic};
  font-family: 'Poppins';
  cursor: pointer;
`;
