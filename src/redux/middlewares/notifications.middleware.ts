import { sendErrorNotification, sendSuccessNotification } from '../../helpers/notifications';
import * as userConstants from '../constants/user.constants';
import * as eventConstants from '../constants/event.constants';

const notificationMiddleware = () => (next: any) => (action: any) => {
  const { error, type } = action;
  switch (type) {
    case userConstants.USER_ON_LOGIN_SUCCEEDED:
      sendSuccessNotification('Sesion iniciada correctamente');
      break;
    case userConstants.USER_ON_REGISTER_SUCCEEDED:
      sendSuccessNotification('Usuario registrado correctamente');
      break;
    case eventConstants.ON_CREATE_SUCCEEDED:
      sendSuccessNotification('Evento creado correctamente');
      break;
    case eventConstants.ON_EDIT_SUCCEEDED:
      sendSuccessNotification('Evento modificado correctamente');
      break;
    case eventConstants.EVENT_ON_CREATE_DRAFT_SUCCEEDED:
      sendSuccessNotification('Evento guardado como borrador correctamente');
      break;
    case userConstants.USER_ON_LOGIN_FAILED:
    case userConstants.USER_ON_REGISTER_FAILED:
    case eventConstants.ON_CREATE_FAILED:
    case eventConstants.ON_EDIT_FAILED:
    case eventConstants.EVENT_ON_CREATE_DRAFT_FAILED:
      sendErrorNotification(error);
      break;
    default:
      break;
  }
  return next(action);
};

export default notificationMiddleware;
