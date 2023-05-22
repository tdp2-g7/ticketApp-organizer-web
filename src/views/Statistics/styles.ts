import COLORS from 'src/helpers/colors';
import styled from 'styled-components';
import {
  ArrowBackIos, BarChart, ShowChart, DonutSmall,
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

export const EmptyTitle = styled.p`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${COLORS.black};
`;

export const BarChartIcon = styled(BarChart)`
  margin-top: 100px;
  transform: scale(10);
  margin-bottom: 50px;
`;

export const EmptyStatistics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  height: 100%;
  width: 100%;
`;

export const ShowChartIcon = styled(ShowChart)`
  margin-top: 100px;
  transform: scale(10);
  margin-bottom: 50px;
`;

export const DonutSmallIcon = styled(DonutSmall)`
  margin-top: 100px;
  transform: scale(10);
  margin-bottom: 80px;
`;
