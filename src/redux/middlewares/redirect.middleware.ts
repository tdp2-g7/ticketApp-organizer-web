import history from '../../helpers/history';
import * as eventConstants from '../constants/event.constants';

const redirectMiddleware = () => (next: any) => (action: any) => {
  const { type } = action;
  switch (type) {
    case eventConstants.ON_CREATE_SUCCEEDED:
      history.push('/');
      break;
    default:
      break;
  }
  return next(action);
};

export default redirectMiddleware;
