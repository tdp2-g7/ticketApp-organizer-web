import { IEvent } from 'src/types/events.types';
import COLORS from './colors';
import { State } from './states';

export const tagState = (event: IEvent) => {
  let startTime: any;
  if (event.startTime) {
    startTime = new Date(event.startTime);
  }

  const endEvent = event.endTime
    ? new Date(event.endTime)
    : new Date(startTime?.setHours(startTime.getHours() + 1));
  const startEvent = new Date(startTime?.setHours(startTime.getHours() - 2));

  if (event.state === State.BLOCKED) {
    return { text: 'Bloqueado', color: COLORS.black };
  }
  if (event.state === State.CANCELLED) {
    return { text: 'Cancelado', color: COLORS.redMandy };
  }
  if (event.state === State.ACTIVE) {
    if (startEvent < new Date() && new Date() < endEvent) {
      return { text: 'En curso', color: COLORS.greenLimeade };
    }
    if (endEvent < new Date()) {
      return { text: 'Finalizado', color: COLORS.mineShaft };
    }
    if (startEvent > new Date()) {
      return { text: 'Activo', color: COLORS.lightViolet };
    }
  }
  return { text: 'null', color: COLORS.lightViolet };
};
