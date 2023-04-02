import { AnyAction } from 'redux';
import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import { createEvent } from '../../services/event.services';
import { onCreateEventFailed, onCreateEventSucceeded } from '../actions/event.actions';
import * as constants from '../constants/event.constants';

export function* eventCreate(action: AnyAction): Generator {
  try {
    const { data }: any = yield call(createEvent, action.data);
    yield put(onCreateEventSucceeded(data));
  } catch (error) {
    yield put(onCreateEventFailed(error));
  }
}

export function* watchEvents(): Generator {
  yield all([
    takeLatest(constants.EVENT_ON_CREATE_REQUESTED, eventCreate),
  ]);
}
