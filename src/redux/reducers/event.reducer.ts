import { Reducer } from 'redux';
import { IEventDefaultState } from '../../types/events.types';
import * as constants from '../constants/event.constants';

const initialState: IEventDefaultState = {
  loading: false,
  data: null,
  events: [],
  maxPage: 0,
  eventData: null,
  drafts: [],
  locations: [],
};

const eventReducer: Reducer = (state = initialState, action = { type: '' }) => {
  const { type, data } = action;
  switch (type) {
    case constants.ON_CREATE_REQUESTED:
    case constants.ON_GET_ALL_BY_USER_ID_REQUESTED:
    case constants.ON_GET_DETAILS_REQUESTED:
    case constants.ON_EDIT_REQUESTED:
    case constants.EVENT_ON_CREATE_DRAFT_REQUESTED:
    case constants.EVENT_ON_GET_DRAFTS_REQUESTED:
    case constants.EVENT_ON_GET_LOCATIONS_REQUESTED:
    case constants.ON_CREATE_FROM_DRAFT_REQUESTED:
    case constants.EVENT_ON_CANCEL_REQUESTED:
      return {
        ...state,
        loading: true,
      };

    case constants.ON_CREATE_SUCCEEDED:
    case constants.ON_EDIT_SUCCEEDED:
    case constants.ON_CREATE_FROM_DRAFT_SUCCEEDED:
    case constants.EVENT_ON_CANCEL_SUCCEEDED:
      return {
        ...state,
        data,
        loading: false,
      };

    // TODO: Remove random
    case constants.ON_GET_ALL_BY_USER_ID_SUCCEEDED:
      return {
        ...state,
        events: data.data.events.map((event: any) => ({
          ...event,
          state: Math.ceil(Math.random() * 3),
        })),
        maxPage: data.data.maxPage,
        loading: false,
      };

    case constants.EVENT_DELETE_IMAGE:
      return {
        ...state,
        eventData: data,
        loading: false,
      };
    case constants.EVENT_ON_GET_DRAFTS_SUCCEEDED:
      return {
        ...state,
        drafts: data,
        loading: false,
      };
    case constants.ON_GET_DETAILS_SUCCEEDED:
      return {
        ...state,
        eventData: {
          ...data.data,
        },
        loading: false,
      };
    case constants.EVENT_ON_GET_LOCATIONS_SUCCEEDED:
      return {
        ...state,
        locations: data,
        loading: false,
      };
    case constants.ON_CREATE_FAILED:
    case constants.ON_GET_ALL_BY_USER_ID_FAILED:
    case constants.ON_GET_DETAILS_FAILED:
    case constants.ON_EDIT_FAILED:
    case constants.EVENT_ON_CREATE_DRAFT_FAILED:
    case constants.EVENT_ON_CREATE_DRAFT_SUCCEEDED:
    case constants.EVENT_ON_GET_DRAFTS_FAILED:
    case constants.EVENT_ON_GET_LOCATIONS_FAILED:
    case constants.ON_CREATE_FROM_DRAFT_FAILED:
    case constants.EVENT_ON_CANCEL_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default eventReducer;
