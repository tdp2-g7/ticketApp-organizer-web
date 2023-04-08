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
      return {
        ...state,
        loading: true,
      };

    case constants.ON_CREATE_SUCCEEDED:
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
    case constants.ON_GET_DETAILS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        eventData: data.data,
      };
    case constants.ON_CREATE_FAILED:
    case constants.ON_GET_ALL_BY_USER_ID_FAILED:
    case constants.ON_GET_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default eventReducer;
