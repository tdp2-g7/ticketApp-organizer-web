import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

import COLORS from '../../helpers/colors';

export const TopNav = styled.div`
  background: rgb(2, 0, 36);
  background: linear-gradient(
    140deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(237, 70, 144, 1) 0%,
    rgba(85, 34, 204, 1) 100%
  );
  border-bottom: 1px solid ${COLORS.greyMystic};
  align-items: center;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
  height: 60px;
  padding: 0 20px;

  & > a {
    color: ${COLORS.black};
    padding: 5px 5%;
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > p {
    padding: 0;
    font-size: 18px;
    margin: 10px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 35%;
  margin: 0 10px;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 35px;
  border-radius: 15px;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.greyMystic};
  padding: 0 10px;
  outline: none;
  line-height: 3.5em;
  font-size: 16px;
  color: ${COLORS.black};
`;

export const CustomSearchIcon = styled(SearchIcon)`
  background-color: ${COLORS.violet};
  cursor: pointer;
  color: white;
  border-radius: 50%;
  padding: 3px;
  left: -30px;
  height: 28px !important;
  width: 28px !important;
  position: relative;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 50%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1500px) {
    width: 40%;
  }

  @media (max-width: 1100px) {
    width: 50%;
  }
`;

export const HeaderLink = styled.div`
  text-decoration: none;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${COLORS.white};
`;

export const CreateEventLink = styled.div`
  text-decoration: none;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${COLORS.white};
`;

export const LogoutContainer = styled.div`
  border: 1px solid ${COLORS.white};
  border-radius: 25px;
  padding: 10px 20px;
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

export const LogoutLink = styled.div`
  text-decoration: none;
  font-size: 18px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: ${COLORS.white};
`;
