import { Reducer } from 'redux';
import * as constants from '../constants/user.constants';

const initialState = {
  loading: false,
  data: null,
};

const userReducer: Reducer = (state = initialState, action) => {
  const { type, data } = action;
  switch (type) {
    case constants.USER_ON_LOGIN_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case constants.USER_ON_LOGIN_SUCCEEDED:
      return {
        ...state,
        loading: false,
        data,
      };

    case constants.USER_ON_LOGIN_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
