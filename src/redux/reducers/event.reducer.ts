import { Reducer } from 'redux';
import { IEventDefaultState } from '../../types/events.types';
import * as constants from '../constants/event.constants';

const initialState: IEventDefaultState = {
  loading: false,
  data: null,
  events: [],
  maxPage: 0,
};

const eventReducer: Reducer = (state = initialState, action = { type: '' }) => {
  const { type, data } = action;
  switch (type) {
    case constants.EVENT_ON_CREATE_REQUESTED:
    case constants.EVENT_ON_GET_ALL_BY_USER_ID_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case constants.EVENT_ON_CREATE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        data,
      };
    case constants.EVENT_ON_GET_ALL_BY_USER_ID_SUCCEEDED:
      return {
        ...state,
        loading: false,
        events: data.data.events,
        maxPage: data.data.maxPage,
      };
    case constants.EVENT_ON_CREATE_FAILED:
    case constants.EVENT_ON_GET_ALL_BY_USER_ID_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default eventReducer;
