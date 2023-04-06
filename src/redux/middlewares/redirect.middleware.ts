import { globalNavigate } from '../../helpers/history';
import * as eventConstants from '../constants/event.constants';

const redirectMiddleware = () => (next: any) => (action: any) => {
  const { type } = action;
  switch (type) {
    case eventConstants.EVENT_ON_CREATE_SUCCEEDED:
      globalNavigate('/');
      break;
    default:
      break;
  }
  return next(action);
};

export default redirectMiddleware;
