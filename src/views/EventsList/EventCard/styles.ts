import styled from 'styled-components';
import { PlaceOutlined } from '@mui/icons-material';
import COLORS from '../../../helpers/colors';

export const CustomImg = styled.img`
  width: 100%;
  height: 110px;
  border-radius: 6px;
  object-fit: cover;
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  text-align: center;
`;

export const DayLabel = styled.p`
  font-size: 21px;
  margin: 0px;
  font-weight: bold;
`;

export const EventContainer = styled.div`
  width: calc(100vw / 5 - 20px);
  max-height: 200px;
  cursor: pointer;
  border-radius: 25px;
  background-color: ${COLORS.white};
  filter: drop-shadow(0px 18.9529px 47.3822px rgba(119, 115, 170, 0.1));
`;
export const EventTitle = styled.p`
  font-size: 13px;
  margin: 0 0 0 5px;
  flex: 1;
  flex-direction: left;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const MonthLabel = styled.p`
  font-size: 10px;
  margin: 0px;
  color: ${COLORS.lightViolet};
`;

export const HourLabel = styled.p`
  font-size: 13px;
  margin: 0px;
  color: ${COLORS.greyMystic};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: left;
  padding: 8px 8px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 7px;
  width: 100%;
`;

export const LocationText = styled.p`
  font-size: 10px;
  margin: 0px;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  color: ${COLORS.greyMystic};
`;

export const RowContainer = styled.div`
  margin: 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const PlaceOutlinedIcon = styled(PlaceOutlined)`
  transform: scale(0.7);
`;

export const Tag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 6px;
  margin: 10px;
  background-color: red;
  border-radius: 10px;
  color: ${COLORS.white};
  font-size: 12px;
  font-family: 'Poppins';
`;
