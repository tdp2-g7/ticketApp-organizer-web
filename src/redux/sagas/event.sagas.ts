import { AnyAction } from 'redux';
import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import {
  createEvent, getDetails, getEventsByUserId, onEditEvent,
} from '../../services/event.services';
import {
  onCreateEventFailed,
  onCreateEventSucceeded,
  onEditFailed,
  onEditSucceeded,
  onGetAllEventsByUserIdFailed,
  onGetAllEventsByUserIdSucceeded,
  onGetDetailsFailed,
  onGetDetailsSucceeded,
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

export function* getEventDetails(action: AnyAction): Generator {
  try {
    const data: any = yield call(getDetails, action.eventId);
    yield put(onGetDetailsSucceeded(data));
  } catch (error) {
    yield put(onGetDetailsFailed(error));
  }
}

export function* editEvent(action: AnyAction): Generator {
  try {
    const data: any = yield call(onEditEvent, action.data);
    yield put(onEditSucceeded(data));
  } catch (error) {
    yield put(onEditFailed(error));
  }
}

export function* watchEvents(): Generator {
  yield all([
    takeLatest(constants.ON_CREATE_REQUESTED, eventCreate),
    takeLatest(constants.ON_GET_ALL_BY_USER_ID_REQUESTED, getAllEventsByUserId),
    takeLatest(constants.ON_GET_DETAILS_REQUESTED, getEventDetails),
    takeLatest(constants.ON_EDIT_REQUESTED, editEvent),
  ]);
}
