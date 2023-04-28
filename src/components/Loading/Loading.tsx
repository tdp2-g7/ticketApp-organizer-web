import React from 'react';
import { CircularProgress } from '@mui/material';
import { LoadingContainer } from './styles';

const Loading = () => (
  <LoadingContainer>
    <CircularProgress size={50} />
  </LoadingContainer>
);

export default Loading;
