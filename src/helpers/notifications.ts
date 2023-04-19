import { NotificationManager } from 'react-notifications';

export function sendErrorNotification(message: string): void {
  NotificationManager.error(message);
}

export function sendInfoNotification(message: string): void {
  NotificationManager.info(message);
}

export function sendSuccessNotification(message: string): void {
  NotificationManager.success(message);
}

export function sendWarningNotification(message: string): void {
  NotificationManager.warning(message);
}
