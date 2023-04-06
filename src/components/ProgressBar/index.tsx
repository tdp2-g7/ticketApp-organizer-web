import React from 'react';

import { Container, FillContainer, ProgressContainer } from './styles';
import { IProgressBarProps } from './types';

const ProgressBar = ({ completed, total }: IProgressBarProps) => {
  const progress = (completed * 100) / total || 0;

  return (
    <ProgressContainer >
      <Container>
        <FillContainer progress={progress} />
      </Container>
    </ProgressContainer>
  );
};

export default ProgressBar;
