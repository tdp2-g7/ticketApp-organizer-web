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
