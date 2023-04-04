import styled, { css } from 'styled-components';
import { ChevronLeft, ChevronRight, EventBusy } from '@mui/icons-material';

import COLORS from '../../helpers/colors';

export const Title = styled.p`
  font-size: 24px;
  margin-bottom: 0px;
  margin-left: 1%;
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
      color: ${COLORS.greyMischka};
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
      color: ${COLORS.greyMischka};
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
