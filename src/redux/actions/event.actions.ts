import { AnyAction } from 'redux';
import { IEvent } from '../../types/events.types';
import * as constants from '../constants/event.constants';

export function onCreateEventRequested(data: IEvent): AnyAction {
  return {
    type: constants.ON_CREATE_REQUESTED,
    data,
  };
}

export function onCreateEventSucceeded(data: unknown): AnyAction {
  return {
    type: constants.ON_CREATE_SUCCEEDED,
    data,
  };
}

export function onCreateEventFailed(error: unknown): AnyAction {
  return {
    type: constants.ON_CREATE_FAILED,
    error,
  };
}

export function onGetAllEventsByUserIdRequested(data: any): AnyAction {
  return {
    type: constants.ON_GET_ALL_BY_USER_ID_REQUESTED,
    data,
  };
}

export function onGetAllEventsByUserIdSucceeded(data: unknown): AnyAction {
  return {
    type: constants.ON_GET_ALL_BY_USER_ID_SUCCEEDED,
    data,
  };
}

export function onGetAllEventsByUserIdFailed(error: unknown): AnyAction {
  return {
    type: constants.ON_GET_ALL_BY_USER_ID_FAILED,
    error,
  };
}

export function onGetDetailsRequested(eventId: string): AnyAction {
  return {
    type: constants.ON_GET_DETAILS_REQUESTED,
    eventId,
  };
}

export function onGetDetailsSucceeded(data: unknown): AnyAction {
  return {
    type: constants.ON_GET_DETAILS_SUCCEEDED,
    data,
  };
}

export function onGetDetailsFailed(error: unknown): AnyAction {
  return {
    type: constants.ON_GET_DETAILS_FAILED,
    error,
  };
}

export function onEditRequested(data: IEvent): AnyAction {
  return {
    type: constants.ON_EDIT_REQUESTED,
    data,
  };
}

export function onEditSucceeded(data: unknown): AnyAction {
  return {
    type: constants.ON_EDIT_SUCCEEDED,
    data,
  };
}

export function onEditFailed(error: unknown): AnyAction {
  return {
    type: constants.ON_EDIT_FAILED,
    error,
  };
}

export function onEventDeleteImage(data: unknown): AnyAction {
  return {
    type: constants.EVENT_DELETE_IMAGE,
    data,
  };
}

export function onCreateDraftRequested(data: IEvent): AnyAction {
  return {
    type: constants.EVENT_ON_CREATE_DRAFT_REQUESTED,
    data,
  };
}

export function onCreateDraftSucceeded(data: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_CREATE_DRAFT_SUCCEEDED,
    data,
  };
}

export function onCreateDraftFailed(error: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_CREATE_DRAFT_FAILED,
    error,
  };
}

export function onGetDrafts(userId: string): AnyAction {
  return {
    type: constants.EVENT_ON_GET_DRAFTS_REQUESTED,
    userId,
  };
}

export function onGetDraftsSucceeded(data: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_GET_DRAFTS_SUCCEEDED,
    data,
  };
}

export function onGetDraftsFailed(error: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_GET_DRAFTS_FAILED,
    error,
  };
}

export function onGetLocations(userId: string): AnyAction {
  return {
    type: constants.EVENT_ON_GET_LOCATIONS_REQUESTED,
    userId,
  };
}

export function onGetLocationsSucceeded(data: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_GET_LOCATIONS_SUCCEEDED,
    data,
  };
}

export function onGetLocationsFailed(error: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_GET_LOCATIONS_FAILED,
    error,
  };
}

export function onUpdateDraftRequested(data: any, eventDraftId: string): AnyAction {
  return {
    type: constants.EVENT_ON_UPDATE_DRAFTS_REQUESTED,
    data,
    eventDraftId,
  };
}

export function onUpdateDraftSucceeded(data: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_UPDATE_DRAFTS_SUCCEEDED,
    data,
  };
}

export function onUpdateDraftFailed(error: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_UPDATE_DRAFTS_FAILED,
    error,
  };
}

export function onCreateEventFromDraftRequested(data: IEvent): AnyAction {
  return {
    type: constants.ON_CREATE_FROM_DRAFT_REQUESTED,
    data,
  };
}

export function onCreateEventFromDraftSucceeded(data: unknown): AnyAction {
  return {
    type: constants.ON_CREATE_FROM_DRAFT_SUCCEEDED,
    data,
  };
}

export function onCreateEventFromDraftFailed(error: unknown): AnyAction {
  return {
    type: constants.ON_CREATE_FROM_DRAFT_FAILED,
    error,
  };
}

export function onCancelRequested(eventId: string): AnyAction {
  return {
    type: constants.EVENT_ON_CANCEL_REQUESTED,
    eventId,
  };
}

export function onCancelSucceeded(data: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_CANCEL_SUCCEEDED,
    data,
  };
}

export function onCancelFailed(error: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_CANCEL_FAILED,
    error,
  };
}

export function onGetStatisticsRequested(eventId: string): AnyAction {
  return {
    type: constants.EVENT_ON_GET_STATISTICS_REQUESTED,
    eventId,
  };
}

export function onGetStatisticsSucceeded(data: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_GET_STATISTICS_SUCCEEDED,
    data,
  };
}

export function onGetStatisticsFailed(error: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_GET_STATISTICS_FAILED,
    error,
  };
}

// EVENT_ON_GET_BY_STATE
export function onGetByStateRequested(userId: string): AnyAction {
  return {
    type: constants.EVENT_ON_GET_BY_STATE_REQUESTED,
    userId,
  };
}

export function onGetByStateSucceeded(data: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_GET_BY_STATE_SUCCEEDED,
    data,
  };
}

export function onGetByStateFailed(error: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_GET_BY_STATE_FAILED,
    error,
  };
}

// EVENT_ON_GET_BY_MONTH
export function onGetByMonthRequested(userId: string, month: number): AnyAction {
  return {
    type: constants.EVENT_ON_GET_BY_MONTH_REQUESTED,
    userId,
    month,
  };
}

export function onGetByMonthSucceeded(data: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_GET_BY_MONTH_SUCCEEDED,
    data,
  };
}

export function onGetByMonthFailed(error: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_GET_BY_MONTH_FAILED,
    error,
  };
}
