import { AnyAction } from 'redux';
import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import { editProfile, login, register } from '../../services/user.services';
import {
  onEditProfileFailed,
  onEditProfileSucceeded,
  onInitializeFailed,
  onInitializeSucceeded,
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

export function* userEditProfile(action: AnyAction): Generator {
  try {
    const data = yield call(editProfile, action.data);
    yield put(onEditProfileSucceeded(data));
  } catch (error) {
    yield put(onEditProfileFailed(error));
  }
}

export function* userInitialize(action: AnyAction): Generator {
  try {
    const { data }: any = yield call(login, action.data);
    yield put(onInitializeSucceeded(data));
  } catch (error) {
    yield put(onInitializeFailed(error));
  }
}

export function* watchUsers(): Generator {
  yield all([
    takeLatest(constants.USER_ON_LOGIN_REQUESTED, userLogin),
    takeLatest(constants.USER_ON_INITIALIZE_REQUESTED, userInitialize),
    takeLatest(constants.USER_ON_REGISTER_REQUESTED, userRegister),
    takeLatest(constants.USER_ON_EDIT_PROFILE_REQUESTED, userEditProfile),
  ]);
}
