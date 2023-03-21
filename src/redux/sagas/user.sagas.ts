import { AnyAction } from 'redux';
import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import { login } from '../../services/user.services';
import { onLoginFailed, onLoginSucceeded } from '../actions/user.actions';
import * as constants from '../constants/user.constants';

export function* userLogin(action: AnyAction): Generator {
  try {
    const { data }: any = yield call(login, action.formData);
    yield put(onLoginSucceeded(data));
  } catch (error) {
    yield put(onLoginFailed(error));
  }
}

export function* watchUsers(): Generator {
  yield all([
    takeLatest(constants.USER_ON_LOGIN_REQUESTED, userLogin),
  ]);
}
