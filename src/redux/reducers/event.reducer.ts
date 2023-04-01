import { Reducer } from 'redux';
import * as constants from '../constants/event.constants';

const initialState = {
  loading: false,
  data: null,
};

const eventReducer: Reducer = (state = initialState, action = { type: '' }) => {
  const { type, data } = action;
  switch (type) {
    case constants.EVENT_ON_CREATE_REQUESTED:
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

    case constants.EVENT_ON_CREATE_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default eventReducer;
