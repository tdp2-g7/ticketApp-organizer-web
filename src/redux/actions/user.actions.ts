import { AnyAction } from 'redux';
import { ILoginFormData } from '../../views/Login/types';
import * as constants from '../constants/user.constants';

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
