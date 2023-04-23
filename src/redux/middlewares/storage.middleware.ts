import * as constants from 'src/redux/constants/user.constants';
import { setCookie, removeCookie } from 'src/helpers/cookies';

const storageMiddleware = () => (next: any) => (action: any) => {
  const { data, type } = action;
  switch (type) {
    case constants.USER_ON_LOGIN_REQUESTED:
      setCookie('accessToken', data.accessToken, {
        path: '/',
        maxAge: 3600,
      });
      setCookie('email', data.email, {
        path: '/',
        maxAge: 3600,
      });
      setCookie('userId', data.userId, {
        path: '/',
        maxAge: 3600,
      });
      break;
    case constants.USER_ON_LOGOUT:
      removeCookie('accessToken', { path: '/' });
      removeCookie('email', { path: '/' });
      removeCookie('userId', { path: '/' });
      break;
    default:
      break;
  }
  return next(action);
};

export default storageMiddleware;
