import styled from 'styled-components';

import COLORS from '../../helpers/colors';

export const RegisterContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    166deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(237, 70, 144, 1) 0%,
    rgba(85, 34, 204, 1) 61%
  );
`;

export const Logo = styled.img`
  margin: 15px 0 0 15px;
  width: 200px;
  height: auto;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 30px;
  font-weight: bold;
  font-family: 'Poppins';
  color: ${COLORS.white};
`;

export const LoginButton = styled.button`
  padding: 10px 8px;
  margin: 0 0 20px 0;
  font-size: 20px;
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

export const RegisterButton = styled.button`
  padding: 10px 8px;
  margin-top: 20px;
  font-size: 16px;
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
export const GoogleSmall = styled.img`
  width: 30px;
  height: auto;
  margin-right: 5px;
`;

export const Google = styled.img`
  width: 40px;
  height: auto;
  margin-right: 5px;
`;

export const InfoContainer = styled.div`
  margin: 0 0 15px 15px;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: left;
`;

export const SubtitleBold = styled.p`
  margin: 0;
  font-size: 22px;
  font-weight: bold;
  color: ${COLORS.white};
  font-family: 'Poppins';
`;

export const Subtitle = styled.p`
  margin: 0;
  font-size: 22px;
  color: ${COLORS.white};
  font-family: 'Poppins';
`;

export const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoText = styled.p`
  margin: 0;
  font-size: 16px;
  color: ${COLORS.white};
  font-family: 'Poppins';
`;

export const Icons = styled.img`
  width: auto;
  height: 40px;
  margin-right: 5px;
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  margin: 0 15px 15px 0;
`;

export const EndRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
