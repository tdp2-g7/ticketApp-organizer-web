import { AnyAction } from 'redux';
import * as constants from '../constants/event.constants';

export function onCreateEventRequested(data: any): AnyAction {
  return {
    type: constants.EVENT_ON_CREATE_REQUESTED,
    data,
  };
}

export function onCreateEventSucceeded(data: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_CREATE_SUCCEEDED,
    data,
  };
}

export function onCreateEventFailed(error: unknown): AnyAction {
  return {
    type: constants.EVENT_ON_CREATE_FAILED,
    error,
  };
}
