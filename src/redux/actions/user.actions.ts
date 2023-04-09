import { AnyAction } from 'redux';
import { IUser } from 'src/types/users.types';
import { ILoginFormData } from '../../views/Login/types';
import * as constants from '../constants/user.constants';

// OnLogin
export function onLoginRequested(formData: ILoginFormData): AnyAction {
  return {
    type: constants.USER_ON_LOGIN_REQUESTED,
    formData,
  };
}

export function onLoginSucceeded(data: unknown): AnyAction {
  return {
    type: constants.USER_ON_LOGIN_SUCCEEDED,
    data,
  };
}

export function onLoginFailed(error: unknown): AnyAction {
  return {
    type: constants.USER_ON_LOGIN_FAILED,
    error,
  };
}

// onLogout
export function onLogout(): AnyAction {
  return {
    type: constants.USER_ON_LOGOUT,
  };
}

// onRegisterRequested
export function onRegisterRequested(data: IUser): AnyAction {
  return {
    type: constants.USER_ON_REGISTER_REQUESTED,
    data,
  };
}

export function onRegisterSucceeded(data: unknown): AnyAction {
  return {
    type: constants.USER_ON_REGISTER_SUCCEEDED,
    data,
  };
}

export function onRegisterFailed(error: unknown): AnyAction {
  return {
    type: constants.USER_ON_REGISTER_FAILED,
    error,
  };
}
