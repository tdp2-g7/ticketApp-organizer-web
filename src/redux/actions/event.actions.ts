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
