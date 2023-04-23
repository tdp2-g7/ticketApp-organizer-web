import { AnyAction } from 'redux';
import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import {
  createEvent,
  getDetails,
  getEventsByUserId,
  onCreateDraft,
  onEditEvent,
  onGetDrafts,
  onGetLocations,
} from '../../services/event.services';
import {
  onCreateDraftFailed,
  onCreateDraftSucceeded,
  onCreateEventFailed,
  onCreateEventSucceeded,
  onEditFailed,
  onEditSucceeded,
  onGetAllEventsByUserIdFailed,
  onGetAllEventsByUserIdSucceeded,
  onGetDetailsFailed,
  onGetDetailsSucceeded,
  onGetDraftsFailed,
  onGetDraftsSucceeded,
  onGetLocationsFailed,
  onGetLocationsSucceeded,
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

export function* createDraft(action: AnyAction): Generator {
  try {
    const data: any = yield call(onCreateDraft, action.data);
    yield put(onCreateDraftSucceeded(data));
  } catch (error) {
    yield put(onCreateDraftFailed(error));
  }
}

export function* getDrafts(action: AnyAction): Generator {
  try {
    const data: any = yield call(onGetDrafts, action.userId);
    yield put(onGetDraftsSucceeded(data));
  } catch (error) {
    yield put(onGetDraftsFailed(error));
  }
}

export function* getLocations(action: AnyAction): Generator {
  try {
    const { data }: any = yield call(onGetLocations, action.userId);
    yield put(onGetLocationsSucceeded(data));
  } catch (error) {
    yield put(onGetLocationsFailed(error));
  }
}

export function* watchEvents(): Generator {
  yield all([
    takeLatest(constants.ON_CREATE_REQUESTED, eventCreate),
    takeLatest(constants.ON_GET_ALL_BY_USER_ID_REQUESTED, getAllEventsByUserId),
    takeLatest(constants.ON_GET_DETAILS_REQUESTED, getEventDetails),
    takeLatest(constants.ON_EDIT_REQUESTED, editEvent),
    takeLatest(constants.EVENT_ON_CREATE_DRAFT_REQUESTED, editEvent),
    takeLatest(constants.EVENT_ON_GET_DRAFTS_REQUESTED, getDrafts),
    takeLatest(constants.EVENT_ON_GET_LOCATIONS_REQUESTED, getLocations),
  ]);
}
