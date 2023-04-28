import styled, { css } from 'styled-components';
import { ChevronLeft, ChevronRight, EventBusy } from '@mui/icons-material';

import COLORS from '../../helpers/colors';
import { ISelect } from './types';

export const Title = styled.p`
  font-size: 24px;
  margin: 0 0 0 1%;
  font-weight: bold;
  color: ${COLORS.darkViolet};
`;

export const EventsContainer = styled.div`
  min-height: 390px;
  display: grid;
  margin: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
`;

export const ArrowLeftIcon = styled(ChevronLeft)`
  transform: scale(3);
  margin-right: 50px;
  color: ${COLORS.darkViolet};
  cursor: pointer;

  ${({ isDisabled }: { isDisabled?: boolean }) => isDisabled
    && css`
      pointer-events: none;
      color: ${COLORS.ghost};
    `};
`;

export const ArrowRightIcon = styled(ChevronRight)`
  transform: scale(3);
  margin-left: 50px;
  color: ${COLORS.darkViolet};
  cursor: pointer;

  ${({ isDisabled }: { isDisabled?: boolean }) => isDisabled
    && css`
      pointer-events: none;
      color: ${COLORS.ghost};
    `};
`;

export const ArrowsContainer = styled.div`
  margin: 0px;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
`;

export const RectangleContainer = styled.div`
  width: 100%;
  height: 150px;
  margin: 40px 0 30px;
  background-color: ${COLORS.lilac};
  display: flex;
  justify-content: center;
`;

export const CreateEventImage = styled.img`
  width: auto;
  height: 180px;
`;

export const MakeEventTitle = styled.p`
  font-size: 22px;
  margin: 20px 0 10px;
  font-weight: 900px;
  color: ${COLORS.black};
`;

export const MakeEventText = styled.p`
  font-size: 14px;
  margin: 0 0 20px;
  color: ${COLORS.mineShaft};
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  width: 50%;
  font-size: 13px;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  background-color: ${COLORS.rose};
  color: ${COLORS.white};
`;

export const ColumnContainer = styled.div`
  flex-direction: column;
  width: 260px;
  align-items: center;
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 390px;
  height: 100%;
  width: 100%;
`;

export const EventBusyIcon = styled(EventBusy)`
  margin-top: 100px;
  transform: scale(3);
`;

export const MainContainer = styled.div`
  height: 65vh;
`;

export const CustomInput = styled.input`
  width: 96%;
  height: 30px;
  background-color: ${COLORS.white};
  border-radius: 3px;
  border: 1px solid ${COLORS.greyMystic};
  padding: 5px 10px;
  font-size: 16px;
  font-family: 'Poppins';
  margin-bottom: 10px;
`;

export const CustomSelect = styled.select<ISelect>`
  width: 100%;
  height: 40px;
  background-color: ${COLORS.white};
  border-radius: 3px;
  border: 1px solid ${COLORS.greyMystic};
  padding: 5px 10px;
  font-size: 16px;
  font-family: 'Poppins';
  cursor: pointer;
  margin-bottom: 10px;
  color: ${({ isPlaceholder }: ISelect) => (isPlaceholder ? COLORS.greyMystic : COLORS.black)};

  > option {
    color: black;
  }
`;

export const OrderBySelect = styled.select`
  background-color: ${COLORS.greyZyrcon};
  border-radius: 25px;
  border: 1px solid ${COLORS.greyZyrcon};
  padding: 4px 0 4px 10px;
  font-size: 16px;
  font-family: 'Poppins';
  margin-right: 2px;
  cursor: pointer;
  color: #1d275f;

  > option {
    color: black;
  }
`;

export const CustomButton = styled.div`
  font-size: 20px;
  font-family: 'Poppins';
  margin: 10px 0;
  padding: 10px 20px;
  border-radius: 6px;
  background-color: ${COLORS.lightViolet};
  color: white;
  text-align: center;
  cursor: pointer;

  ${({ isInverted }: { isInverted?: boolean }) => isInverted
    && css`
      background-color: white;
      color: ${COLORS.lightViolet};
      border: 1px solid ${COLORS.lightViolet};
    `};
`;

export const FiltersBox = styled.div`
  padding: 4px 30px;
  border-radius: 25px;
  border: 1px solid ${COLORS.lightViolet};
  align-items: center;
  cursor: pointer;
  margin-right: 10px;

  & > p {
    font-size: 16px;
    font-family: 'Poppins';
    font-style: bold;
    color: ${COLORS.lightViolet};
    margin: 0;
  }
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 20px;
`;

export const SortBy = styled.div`
  background: ${COLORS.greyZyrcon};
  border-radius: 18px;
  padding: 4px 0;
  margin-right: 10px;
  cursor: pointer;
`;

export const EmptyTitle = styled.p`
  font-size: 24px;
  margin-bottom: 10px;
  font-weight: bold;
  color: ${COLORS.black};
`;
