import { AnyAction } from 'redux';
import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import { createEvent, getEventsByUserId } from '../../services/event.services';
import {
  onCreateEventFailed,
  onCreateEventSucceeded,
  onGetAllEventsByUserIdFailed,
  onGetAllEventsByUserIdSucceeded,
} from '../actions/event.actions';
import * as constants from '../constants/event.constants';

export function* eventCreate(action: AnyAction): Generator {
  try {
    const { data }: any = yield call(createEvent, action.data);
    yield put(onCreateEventSucceeded(data));
  } catch (error) {
    yield put(onCreateEventFailed(error));
  }
}

export function* getAllEventsByUserId(action: AnyAction): Generator {
  try {
    const data: any = yield call(getEventsByUserId, action.data);
    yield put(onGetAllEventsByUserIdSucceeded(data));
  } catch (error) {
    yield put(onGetAllEventsByUserIdFailed(error));
  }
}

export function* watchEvents(): Generator {
  yield all([
    takeLatest(constants.EVENT_ON_CREATE_REQUESTED, eventCreate),
    takeLatest(constants.EVENT_ON_GET_ALL_BY_USER_ID_REQUESTED, getAllEventsByUserId),
  ]);
}
