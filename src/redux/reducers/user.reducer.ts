import { Reducer } from 'redux';
import { IUserDefaultState } from 'src/types/users.types';
import * as constants from '../constants/user.constants';

const initialState: IUserDefaultState = {
  loading: false,
  data: null,
  user: null,
};

const userReducer: Reducer = (state = initialState, action = { type: '' }) => {
  const { type, data } = action;
  switch (type) {
    case constants.USER_ON_LOGIN_REQUESTED:
    case constants.USER_ON_INITIALIZE_REQUESTED:
    case constants.USER_ON_REGISTER_REQUESTED:
    case constants.USER_ON_EDIT_PROFILE_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case constants.USER_ON_LOGIN_SUCCEEDED:
    case constants.USER_ON_INITIALIZE_SUCCEEDED:
    case constants.USER_ON_EDIT_PROFILE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        user: data,
      };

    case constants.USER_ON_LOGIN_FAILED:
    case constants.USER_ON_REGISTER_SUCCEEDED:
    case constants.USER_ON_REGISTER_FAILED:
    case constants.USER_ON_INITIALIZE_FAILED:
    case constants.USER_ON_EDIT_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default userReducer;
