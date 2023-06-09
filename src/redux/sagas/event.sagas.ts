import { AnyAction } from 'redux';
import {
  call, put, takeLatest, all,
} from 'redux-saga/effects';
import {
  createEvent,
  getDetails,
  getEventsByUserId,
  onCancel,
  onCreateDraft,
  onCreateFromDraft,
  onEditEvent,
  onGetDrafts,
  onGetEventsByMonth,
  onGetEventsByState,
  onGetLocations,
  onGetStatistics,
  onUpdateDraft,
} from '../../services/event.services';
import {
  onCancelFailed,
  onCancelSucceeded,
  onCreateDraftFailed,
  onCreateDraftSucceeded,
  onCreateEventFailed,
  onCreateEventFromDraftFailed,
  onCreateEventFromDraftSucceeded,
  onCreateEventSucceeded,
  onEditFailed,
  onEditSucceeded,
  onGetAllEventsByUserIdFailed,
  onGetAllEventsByUserIdSucceeded,
  onGetByMonthFailed,
  onGetByMonthSucceeded,
  onGetByStateFailed,
  onGetByStateSucceeded,
  onGetDetailsFailed,
  onGetDetailsSucceeded,
  onGetDraftsFailed,
  onGetDraftsSucceeded,
  onGetLocationsFailed,
  onGetLocationsSucceeded,
  onGetStatisticsFailed,
  onGetStatisticsSucceeded,
  onUpdateDraftFailed,
  onUpdateDraftSucceeded,
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
    const { data }: any = yield call(getDetails, action.eventId);
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

export function* updateDraft(action: AnyAction): Generator {
  try {
    const data: any = yield call(onUpdateDraft, action.data, action.eventDraftId);
    yield put(onUpdateDraftSucceeded(data));
  } catch (error) {
    yield put(onUpdateDraftFailed(error));
  }
}

export function* getDrafts(action: AnyAction): Generator {
  try {
    const { data }: any = yield call(onGetDrafts, action.userId);
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

export function* createFromDraft(action: AnyAction): Generator {
  try {
    const { data }: any = yield call(onCreateFromDraft, action.data);
    yield put(onCreateEventFromDraftSucceeded(data));
  } catch (error) {
    yield put(onCreateEventFromDraftFailed(error));
  }
}

export function* eventCancel(action: AnyAction): Generator {
  try {
    const data: any = yield call(onCancel, action.eventId);
    yield put(onCancelSucceeded(data));
  } catch (error) {
    yield put(onCancelFailed(error));
  }
}

export function* getStatistics(action: AnyAction): Generator {
  try {
    const { data }: any = yield call(onGetStatistics, action.eventId);
    yield put(onGetStatisticsSucceeded(data));
  } catch (error) {
    yield put(onGetStatisticsFailed(error));
  }
}

export function* getEventsByState(action: AnyAction): Generator {
  try {
    const data: any = yield call(onGetEventsByState, action.userId);
    yield put(onGetByStateSucceeded(data));
  } catch (error) {
    yield put(onGetByStateFailed(error));
  }
}

export function* getEventsByMonth(action: AnyAction): Generator {
  try {
    const data: any = yield call(onGetEventsByMonth, action.userId, action.year);
    yield put(onGetByMonthSucceeded(data));
  } catch (error) {
    yield put(onGetByMonthFailed(error));
  }
}

export function* watchEvents(): Generator {
  yield all([
    takeLatest(constants.ON_CREATE_REQUESTED, eventCreate),
    takeLatest(constants.ON_GET_ALL_BY_USER_ID_REQUESTED, getAllEventsByUserId),
    takeLatest(constants.ON_GET_DETAILS_REQUESTED, getEventDetails),
    takeLatest(constants.ON_EDIT_REQUESTED, editEvent),
    takeLatest(constants.EVENT_ON_CREATE_DRAFT_REQUESTED, createDraft),
    takeLatest(constants.EVENT_ON_UPDATE_DRAFTS_REQUESTED, updateDraft),
    takeLatest(constants.EVENT_ON_GET_DRAFTS_REQUESTED, getDrafts),
    takeLatest(constants.EVENT_ON_GET_LOCATIONS_REQUESTED, getLocations),
    takeLatest(constants.ON_CREATE_FROM_DRAFT_REQUESTED, createFromDraft),
    takeLatest(constants.EVENT_ON_CANCEL_REQUESTED, eventCancel),
    takeLatest(constants.EVENT_ON_GET_STATISTICS_REQUESTED, getStatistics),
    takeLatest(constants.EVENT_ON_GET_BY_STATE_REQUESTED, getEventsByState),
    takeLatest(constants.EVENT_ON_GET_BY_MONTH_REQUESTED, getEventsByMonth),
  ]);
}
