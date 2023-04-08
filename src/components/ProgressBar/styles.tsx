import styled from 'styled-components';
import COLORS from '../../helpers/colors';

export const Container = styled.div`
  height: 12px;
  background: ${COLORS.greenLimeade};
  border-radius: 5px;
  display: flex;
  flex: 1;
  margin-right: 5px;
`;

export const FillContainer = styled.div`
  max-width: 100%;
  width: ${({ progress }: { progress?: number }) => `${progress}%`};
  background-color: ${COLORS.redMandy};
  border-radius: 10px;
`;

export const ProgressContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
`;
