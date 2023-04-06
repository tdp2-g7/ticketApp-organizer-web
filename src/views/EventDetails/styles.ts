import styled from 'styled-components';
import {
  ChevronLeft,
  ChevronRight,
  ArrowBackIos,
  CalendarMonth,
  PlaceOutlined,
  GroupsOutlined,
  PersonOutlineOutlined,
  EditOutlined,
} from '@mui/icons-material';
import COLORS from '../../helpers/colors';

export const Title = styled.p`
  font-size: 24px;
  margin: 1% 0 0 2%;
  font-weight: bold;
  color: ${COLORS.darkViolet};
`;

export const CustomImg = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 10px;
  object-fit: cover;
`;

export const ImagesContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  align-items: center;
`;

export const ArrowLeftIcon = styled(ChevronLeft)`
  transform: scale(2);
  margin: 0 20px 0 50px;
  color: ${COLORS.darkViolet};
  cursor: pointer;
`;

export const ArrowRightIcon = styled(ChevronRight)`
  transform: scale(2);
  margin: 0 50px 0 20px;
  color: ${COLORS.darkViolet};
  cursor: pointer;
`;

export const BackArrowContainer = styled(ArrowBackIos)`
  transform: scale(0.75);
  margin: 5px 0 0 10px;
  color: ${COLORS.greyMystic};
  cursor: pointer;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const BackText = styled.p`
  font-size: 12px;
  margin: 5px 0 0 0;
  color: ${COLORS.greyMystic};
  cursor: pointer;
`;

export const Subtitle = styled.p`
  font-size: 18px;
  margin: 15px 0 7px 0;
  font-weight: bold;
  color: ${COLORS.mineShaft};
`;

export const InfoContainer = styled.div`
  width: 95%;
  margin: 0 0 3% 2%;
`;

export const Text = styled.p`
  font-size: 15px;
  margin: 0 5px 0 0;
  color: ${COLORS.mineShaft};
`;

export const CalendarIcon = styled(CalendarMonth)`
  transform: scale(0.75);
  margin: 0 0 0 10px;
`;

export const LocationIcon = styled(PlaceOutlined)`
  transform: scale(0.75);
  margin: 0 0 0 10px;
`;

export const LocationAndTimeRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PeopleIcon = styled(GroupsOutlined)`
  transform: scale(0.75);
  margin: 0 0 0 10px;
`;

export const PersonIcon = styled(PersonOutlineOutlined)`
  transform: scale(0.75);
  margin: 0 0 0 10px;
`;

export const RowContainerVacancies = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextOccupied = styled.p`
  font-size: 11px;
  margin: 0 5px 0 0;
  color: ${COLORS.mineShaft};
  align-items: center;
`;

export const DivOccupied = styled.div`
  width: 100%;
  text-align: center;
`;

export const FAQsText = styled.p`
  font-size: 15px;
  margin: 0 5px 0 0;
  color: ${COLORS.mineShaft};
  white-space: pre-line;
`;

export const EditOutlinedIcon = styled(EditOutlined)`
  color: ${COLORS.lightViolet};
  transform: scale(0.8);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin: 0 10px 10px 0;
  border-radius: 20px;
  border: 1px solid;
  border-color: ${COLORS.lightViolet};
  width: 80px;
  cursor: pointer;
`;

export const Button = styled.div`
  margin-top: 3px;
  font-size: 15px;
  background-color: transparent;
  color: ${COLORS.lightViolet};
`;

export const RowContainerTitleEdit = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
