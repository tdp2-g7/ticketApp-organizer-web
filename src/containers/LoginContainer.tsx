import React, { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { onLoginRequested } from '../redux/actions/user.actions';
import Login from '../views/Login/Login';
import { ILoginFormData } from '../views/Login/types';

const LoginContainer: FunctionComponent = () => {
  const dispatch = useDispatch();

  const onLoginClick = (formData: ILoginFormData) => {
    dispatch(onLoginRequested(formData));
  };

  return <Login onLoginClick={onLoginClick} />;
};

export default LoginContainer;
