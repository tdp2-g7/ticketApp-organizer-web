import { Reducer } from 'redux';
import { IEventDefaultState } from '../../types/events.types';
import * as constants from '../constants/event.constants';

const initialState: IEventDefaultState = {
  loading: false,
  data: null,
  events: [],
  maxPage: 0,
  eventData: null,
};

const eventReducer: Reducer = (state = initialState, action = { type: '' }) => {
  const { type, data } = action;
  switch (type) {
    case constants.ON_CREATE_REQUESTED:
    case constants.ON_GET_ALL_BY_USER_ID_REQUESTED:
    case constants.ON_GET_DETAILS_REQUESTED:
    case constants.ON_EDIT_REQUESTED:
    case constants.EVENT_ON_CREATE_DRAFT_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case constants.ON_CREATE_SUCCEEDED:
    case constants.ON_EDIT_SUCCEEDED:
      return {
        ...state,
        loading: false,
        data,
      };
    case constants.ON_GET_ALL_BY_USER_ID_SUCCEEDED:
      return {
        ...state,
        loading: false,
        events: data.data.events,
        maxPage: data.data.maxPage,
      };

    case constants.EVENT_DELETE_IMAGE:
      return {
        ...state,
        loading: false,
        eventData: data,
      };

    case constants.ON_GET_DETAILS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        eventData: {
          ...data.data,
        },
      };
    case constants.ON_CREATE_FAILED:
    case constants.ON_GET_ALL_BY_USER_ID_FAILED:
    case constants.ON_GET_DETAILS_FAILED:
    case constants.ON_EDIT_FAILED:
    case constants.EVENT_ON_CREATE_DRAFT_FAILED:
    case constants.EVENT_ON_CREATE_DRAFT_SUCCEEDED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default eventReducer;
