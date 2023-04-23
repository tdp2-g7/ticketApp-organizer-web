/* eslint-disable react/jsx-props-no-spreading */
import { getCookie } from 'src/helpers/cookies';
import React, { FunctionComponent } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute: FunctionComponent<any> = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const token = getCookie('accessToken');
  const location = useLocation();

  if (!token) {
    return <Navigate to='/auth' state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
