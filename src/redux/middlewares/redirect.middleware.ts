import { globalNavigate } from '../../helpers/history';
import * as eventConstants from '../constants/event.constants';
import * as userConstants from '../constants/user.constants';

const redirectMiddleware = () => (next: any) => (action: any) => {
  const { type, data } = action;
  switch (type) {
    case eventConstants.ON_CREATE_SUCCEEDED:
    case eventConstants.EVENT_ON_CREATE_DRAFT_SUCCEEDED:
    case userConstants.USER_ON_LOGIN_SUCCEEDED:
      globalNavigate('/home');
      break;
    case eventConstants.ON_EDIT_SUCCEEDED:
      globalNavigate(`/events/${data.eventId}`);
      break;
    case eventConstants.EVENT_ON_UPDATE_DRAFTS_SUCCEEDED:
    case eventConstants.ON_CREATE_FROM_DRAFT_SUCCEEDED:
      globalNavigate('/home');
      break;
    case userConstants.USER_ON_LOGOUT:
    case userConstants.USER_ON_INITIALIZE_FAILED:
      globalNavigate('/auth');
      break;
    default:
      break;
  }
  return next(action);
};

export default redirectMiddleware;
