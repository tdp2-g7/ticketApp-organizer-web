import { AnyAction } from 'redux';
import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import { login, register } from '../../services/user.services';
import {
  onLoginFailed,
  onLoginSucceeded,
  onRegisterFailed,
  onRegisterSucceeded,
} from '../actions/user.actions';
import * as constants from '../constants/user.constants';

export function* userLogin(action: AnyAction): Generator {
  try {
    const { data }: any = yield call(login, action.data);
    yield put(onLoginSucceeded(data));
  } catch (error) {
    yield put(onLoginFailed(error));
  }
}

export function* userRegister(action: AnyAction): Generator {
  try {
    const { data }: any = yield call(register, action.data);
    yield put(onRegisterSucceeded(data));
  } catch (error) {
    yield put(onRegisterFailed(error));
  }
}

export function* watchUsers(): Generator {
  yield all([
    takeLatest(constants.USER_ON_LOGIN_REQUESTED, userLogin),
    takeLatest(constants.USER_ON_REGISTER_REQUESTED, userRegister),
  ]);
}
